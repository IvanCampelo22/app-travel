import type { NextApiRequest, NextApiResponse } from 'next'
import { WebAuthClient } from './web-auth.client'
import { WebAuthCookie } from './web-auth.cookie'
import { authEnvironment } from './web-auth.environment'
import { CookieNames, State } from './web-auth.types'

async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  const webAuth = await WebAuthClient.getInstance()
  const backPath = (req.query.backPath as string) || authEnvironment.backPath
  const { code_verifier, code_challenge } = webAuth.generatePkce()
  const name = CookieNames.STATE
  const stateCookie = new WebAuthCookie<State>({ name, req, res })

  const state = await stateCookie.encrypt({ state: backPath, code_verifier })
  stateCookie.persist()

  const authorizationUrl = webAuth.client.authorizationUrl({
    scope: 'openid email profile',
    code_challenge_method: 'S256',
    code_challenge,
    state
  })

  res.redirect(authorizationUrl)
}

export { loginHandler }
