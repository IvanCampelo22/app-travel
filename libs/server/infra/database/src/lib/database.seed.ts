import { AccountCategory, PrismaClient } from '@prisma/client'

const { DATABASE_URL } = process.env
const prisma = new PrismaClient({ datasources: { db: { url: DATABASE_URL } } })

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
              externalId: '2a9f4eae-ad38-11ed-afa1-0242ac120002'
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
              externalId: '00d726de-cca2-4a89-9adc-67f01b8629ff'
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
