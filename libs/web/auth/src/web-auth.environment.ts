import * as environment from 'env-var';

const authEnvironment = {
  backPath: '/admin',
  nodeEnvironment: environment.get('NODE_ENV').required().asString(),
  sessionSecret: environment.get('SESSION_SECRET').required().asString(),
  client: {
    issuer: environment.get('KEYCLOAK_ISSUER').required().asString(),
    client_id: environment.get('KEYCLOAK_CLIENT_ID').required().asString(),
    client_secret: environment
      .get('KEYCLOAK_CLIENT_SECRET')
      .required()
      .asString(),
    redirect_uris: [environment.get('AUTH_REDIRECT_URI').required().asString()],
    response_types: ['code'],
  },
};

export { authEnvironment };
