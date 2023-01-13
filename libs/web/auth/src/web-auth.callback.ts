import { NextApiRequest, NextApiResponse } from 'next';
import { WebAuthClient } from './web-auth.client';
import { WebAuthCookie } from './web-auth.cookie';
import { authEnvironment } from './web-auth.environment';
import { WebAuthSession } from './web-auth.session';
import { CookieNames, State } from './web-auth.types';

const CallbackHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const webAuth = await WebAuthClient.getInstance();
  const name = CookieNames.STATE;
  const stateCookie = new WebAuthCookie<State>({ name, req, res });
  const { state, code_verifier } = await stateCookie.extract().decrypt<State>();
  const encryptedState = stateCookie.getEncrypted();

  const params = webAuth.client.callbackParams(req);
  if (encryptedState !== params['state']) res.redirect('/');
  const tokenSet = await webAuth.client.callback(
    authEnvironment.client.redirect_uris[0],
    params,
    {
      code_verifier,
      state: encryptedState,
    }
  );

  const userInfo = await webAuth.client.userinfo(tokenSet);
  const session = new WebAuthSession({ tokenSet, userInfo, req, res });
  await session.persist();

  stateCookie.remove();
  res.redirect(state);
};

export { CallbackHandler };
