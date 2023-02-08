import * as environment from 'env-var'

const DatabaseConfig = () => ({
  database: {
    name: environment.get('DB_NAME').required().asString(),
    user: environment.get('DB_USER').required().asString(),
    password: environment.get('DB_PASSWORD').required().asString(),
    host: environment.get('DB_HOST').required().asString(),
    port: environment.get('DB_PORT').required().asString(),
    logging: 'all'
  }
})

export { DatabaseConfig }
