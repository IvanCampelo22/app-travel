import { faker } from '@faker-js/faker'
import { AccountCategory, Prisma } from '@prisma/client'

const createOneAccount = (
  tenantId: number,
  ownerId: number,
  category: AccountCategory
): Prisma.AccountCreateArgs => {
  return {
    data: {
      ownerId,
      name: 'LBR Tour',
      email: faker.internet.email(),
      category,
      tenant: {
        connect: {
          id: tenantId
        }
      },
      accountUsers: {
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

export { createOneAccount }
