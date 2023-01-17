/* eslint-disable @typescript-eslint/no-var-requires */
import Iron from '@hapi/iron'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { authEnvironment } from './web-auth.environment'
import { CookieProps } from './web-auth.types'
const psl = require('psl')

class WebAuthCookie<T> {
  private _encrypted: string
  private _decrypted: T

  constructor(private readonly props: CookieProps) {}

  public async encrypt<C extends T>(value: C): Promise<string> {
    this._encrypted = await Iron.seal(
      value,
      authEnvironment.sessionSecret,
      Iron.defaults
    )
    return this._encrypted
  }

  public async decrypt<C extends T>(): Promise<T> {
    this._decrypted = (await Iron.unseal(
      this._encrypted,
      authEnvironment.sessionSecret,
      Iron.defaults
    )) as C
    return this._decrypted
  }

  public persist() {
    const { name, maxAge, req, res } = this.props
    const domain = psl.parse(req.headers.host).domain
    setCookie(name.toString(), this._encrypted, {
      req,
      res,
      secure: authEnvironment.nodeEnvironment === 'production',
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      domain,
      maxAge: maxAge || 900
    })
  }

  public extract() {
    const { name, req, res } = this.props
    const value = getCookie(name.toString(), { req, res })
    if (value) {
      this._encrypted = value as string
      return this
    }
    throw new Error('Cookie not found')
  }

  public remove() {
    const { name, req, res } = this.props
    const domain = psl.parse(req.headers.host).domain
    deleteCookie(name, { req, res, path: '/', domain })
  }

  public getEncrypted() {
    return this._encrypted
  }
}

export { WebAuthCookie }
