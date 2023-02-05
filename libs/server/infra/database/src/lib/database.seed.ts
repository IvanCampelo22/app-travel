import { faker } from '@faker-js/faker'
import { AccountCategory, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.tenant.upsert({
    where: { email: 'master@viagem10.com' },
    update: {},
    create: {
      name: 'Viagem10',
      email: 'info@viagem10.com',
      users: {
        createMany: {
          data: [
            {
              firstName: 'Bruno',
              lastName: 'Loepert',
              email: 'bruno@viagem10.com',
              isMaster: true,
              externalId: faker.database.mongodbObjectId()
            }
          ]
        }
      }
    }
  })

  await prisma.account.upsert({
    where: { name: 'LBR Tour' },
    update: {},
    create: {
      tenantId: 1,
      name: 'LBR Tour',
      email: 'info@lbrtour.com',
      ownerId: 1,
      category: AccountCategory.Agency,
      accountUsers: {
        createMany: {
          data: [
            {
              firstName: 'Bruno',
              lastName: 'Loepert',
              email: 'bruno@lbrtour.com',
              isMaster: true,
              externalId: faker.database.mongodbObjectId()
            }
          ]
        }
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
