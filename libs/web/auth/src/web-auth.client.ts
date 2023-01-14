import { Client, generators, Issuer } from 'openid-client'
import { authEnvironment } from './web-auth.environment'
import { Pkce } from './web-auth.types'

class WebAuthClient {
  private static instance: WebAuthClient
  private _client: Client

  private constructor() {}

  public static getInstance = async (): Promise<WebAuthClient> => {
    if (!WebAuthClient.instance) {
      WebAuthClient.instance = new WebAuthClient()
      const authIssuer = await Issuer.discover(authEnvironment.client.issuer)
      const client = new authIssuer.Client({ ...authEnvironment.client })
      WebAuthClient.instance.client = client
    }
    return WebAuthClient.instance
  }

  public set client(client: Client) {
    this._client = client
  }

  public get client() {
    return this._client
  }

  public generatePkce(): Pkce {
    const code_verifier = generators.codeVerifier()
    const code_challenge = generators.codeChallenge(code_verifier)
    return { code_verifier, code_challenge }
  }
}

export { WebAuthClient }
