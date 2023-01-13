import { NextApiRequest, NextApiResponse } from 'next';
import { TokenSet, UserinfoResponse } from 'openid-client';

enum CookieNames {
  ACCESS_TOKEN = 'TST_ACCESS_TOKEN',
  ID_TOKEN = 'TST_ID_TOKEN',
  REFRESH_TOKEN = 'TST_REFRESH_TOKEN',
  TOKEN_SET_EXTRA = 'TST_TOKEN_SET',
  USER_INFO = 'TST_USER_INFO',
  STATE = 'TST_STATE',
}

type CookieProps = {
  name: CookieNames;
  req: NextApiRequest;
  res: NextApiResponse;
  maxAge?: number;
};

type AccessToken = {
  access_token?: string;
};

type IdToken = {
  id_token?: string;
};

type RefreshToken = {
  refresh_token?: string;
};

type TokenSetExtra = {
  token_type?: string;
  expires_in?: number;
  expires_at?: number;
  session_state?: string;
  scope?: string;
};

type State = {
  state: string;
  code_verifier: string;
};

type Cookies = Partial<{
  [key: string]: string;
}>;

type Pkce = {
  code_verifier: string;
  code_challenge: string;
};

type Session = {
  tokenSet: TokenSet | undefined;
  userInfo: UserinfoResponse;
  req: NextApiRequest;
  res: NextApiResponse;
};

export { CookieNames };
export type {
  CookieProps,
  Pkce,
  State,
  Cookies,
  AccessToken,
  RefreshToken,
  IdToken,
  TokenSetExtra,
  Session,
};
