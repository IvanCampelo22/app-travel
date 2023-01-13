// import Iron from '@hapi/iron';
// import { generators } from 'openid-client';
// import { WebAuthSession } from '../src/auth.session';
// import { Session } from '../src/auth.types';
// import { NextApiResponseMock } from './next-api-response.mock';

// describe('WebAuthSession', () => {
//   describe('.serialize', () => {
//     it('should return a encrypted session cookie', async () => {
//       const codeVerifier = generators.codeVerifier();
//       const session: Session = { codeVerifier };
//       const secret = WebAuthSession.cookieConfig.secret;
//       const value = await Iron.seal(session, secret, Iron.defaults);
//       const host = 'localhost';

//       const cookie = WebAuthSession.serialize({
//         value,
//         host,
//       });

//       expect(cookie).toBe(
//         `${WebAuthSession.cookieConfig.name}=${value}; Max-Age=36000; Domain=localhost; Path=/; HttpOnly; SameSite=Lax`
//       );
//     });
//   });

//   describe('.extract', () => {
//     it('should return a Session object', async () => {
//       const codeVerifier = generators.codeVerifier();
//       const session: Session = { codeVerifier };
//       const secret = WebAuthSession.cookieConfig.secret;
//       const name = WebAuthSession.cookieConfig.name;
//       const value = await Iron.seal(session, secret, Iron.defaults);

//       const cookies = {
//         [name]: value,
//       };

//       const sessionObject = await WebAuthSession.extract(cookies);

//       expect(session.codeVerifier === sessionObject.codeVerifier).toBeTruthy();
//     });

//     it('should throw a Error', async () => {
//       const cookies = {};

//       try {
//         await WebAuthSession.extract(cookies);
//       } catch (error) {
//         expect(error.message).toBe('Session not found');
//       }
//     });
//   });

//   describe('.persist', () => {
//     it('should persist the session', async () => {
//       const codeVerifier = generators.codeVerifier();
//       const session: Session = { codeVerifier };
//       const secret = WebAuthSession.cookieConfig.secret;
//       const value = await Iron.seal(session, secret, Iron.defaults);
//       const host = 'localhost';
//       const response = new NextApiResponseMock();
//       const mockedResponse = jest.spyOn(response, 'setHeader');
//       const mockedSerialize = jest.spyOn(WebAuthSession, 'serialize');

//       WebAuthSession.persist({ value, host }, response);

//       expect(mockedResponse).toBeCalled();
//       expect(mockedSerialize).toBeCalledWith({ value, host });
//     });
//   });
// });
