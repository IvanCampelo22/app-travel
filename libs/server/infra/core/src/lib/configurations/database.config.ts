import * as environment from 'env-var'

const DatabaseConfig = () => ({
  database: {
    url: environment.get('DATABASE_URL').required().asString(),
    logging: 'all'
  }
})

export { DatabaseConfig }
