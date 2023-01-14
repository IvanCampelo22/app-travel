import { UserinfoResponse } from 'openid-client'
import { WebAuthCookie } from './web-auth.cookie'
import {
  AccessToken,
  CookieNames,
  IdToken,
  RefreshToken,
  Session,
  TokenSetExtra
} from './web-auth.types'

class WebAuthSession {
  constructor(private readonly session: Session) {}

  public async persist() {
    const { tokenSet, userInfo } = this.session

    await this.persistCookie<AccessToken>(
      { access_token: tokenSet?.access_token },
      CookieNames.ACCESS_TOKEN
    )

    await this.persistCookie<IdToken>(
      { id_token: tokenSet?.id_token },
      CookieNames.ID_TOKEN
    )

    await this.persistCookie<RefreshToken>(
      { refresh_token: tokenSet?.refresh_token },
      CookieNames.REFRESH_TOKEN
    )

    await this.persistCookie<UserinfoResponse>(
      { ...userInfo },
      CookieNames.USER_INFO
    )

    const { token_type, expires_in, expires_at, session_state, scope } =
      tokenSet!

    await this.persistCookie<TokenSetExtra>(
      { token_type, expires_in, expires_at, session_state, scope },
      CookieNames.TOKEN_SET_EXTRA
    )
  }

  private async persistCookie<T>(obj: T, name: CookieNames) {
    const { req, res } = this.session
    const maxAge = 604800
    const cookie = new WebAuthCookie<T>({ name, req, res, maxAge })
    await cookie.encrypt<T>(obj)
    cookie.persist()
  }
}

export { WebAuthSession }
