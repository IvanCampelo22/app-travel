import { faker } from '@faker-js/faker'
import { Prisma } from '@prisma/client'

const createOneTenant = (): Prisma.TenantCreateArgs => {
  return {
    data: {
      name: faker.company.name(),
      email: faker.internet.email(),
      users: {
        createMany: {
          data: [
            {
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
              email: faker.internet.email(),
              isMaster: true,
              externalId: faker.database.mongodbObjectId()
            }
          ]
        }
      }
    }
  }
}

export { createOneTenant }
