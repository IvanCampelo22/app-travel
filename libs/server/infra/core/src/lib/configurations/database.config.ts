import * as environment from 'env-var'

const DatabaseConfig = () => ({
  database: {
    url: environment.get('DATABASE_URL').required().asString(),
    user: environment.get('user').required().asString(),
    password: environment.get('password').required().asString(),
    host: environment.get('host').required().asString(),
    port: environment.get('port').required().asString(),
    name: environment.get('name').required().asString(),

    logging: 'all'
  }
})

export { DatabaseConfig }
