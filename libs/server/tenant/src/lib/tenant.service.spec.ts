import { Test, TestingModule } from '@nestjs/testing'
import { Prisma } from '@prisma/client'
import { CoreModule } from '@server/core'
import { DatabaseModule, DatabaseService } from '@server/database'
import { TenantModule } from './tenant.module'
import { TenantService } from './tenant.service'

describe('Tenant Service', () => {
  let tenantService: TenantService
  let db: DatabaseService

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, DatabaseModule, TenantModule]
    }).compile()

    tenantService = moduleRef.get<TenantService>(TenantService)
    db = moduleRef.get<DatabaseService>(DatabaseService)
  })

  afterEach(async () => {
    await db.account.deleteMany({})
    await db.tenant.deleteMany({})
  })

  afterAll(async () => {
    await db.$disconnect()
  })

  describe('create', () => {
    it('should save and return a tenant object', async () => {
      const tenantCreateArgs: Prisma.TenantCreateArgs = {
        data: {
          name: 'Tenant 1',
          email: 'tenant1@gmail.com'
        }
      }

      const tenant = await tenantService.create(tenantCreateArgs)

      expect(tenant.email).toBe('tenant1@gmail.com')
    })
  })

  describe('findMany', () => {
    it('should return all tenants objects', async () => {
      const tenantCreateManyArgs: Prisma.TenantCreateManyArgs = {
        data: [
          {
            name: 'tenant1',
            email: 'tenant1@gmail.com'
          },
          {
            name: 'tenant2',
            email: 'tenant2@gmail.com'
          }
        ]
      }

      await db.tenant.createMany(tenantCreateManyArgs)
      const tenants = await tenantService.findMany()

      expect(tenants.length).toBe(2)
    })
  })

  describe('update', () => {
    it('should update a tenant object', async () => {
      const tenantCreateArgs: Prisma.TenantCreateArgs = {
        data: {
          name: 'tenant1',
          email: 'tenant1@gmail.com'
        }
      }

      const { id } = await tenantService.create({ ...tenantCreateArgs })

      const tenantUpdateArgs: Prisma.TenantUpdateArgs = {
        where: { id },
        data: {
          name: 'Tenant2',
          email: 'tenant2@gmail.com'
        }
      }
      const tenant = await tenantService.update(tenantUpdateArgs)
      expect(tenant.name).toBe('Tenant2')
    })
  })

  describe('deactivate', () => {
    it('should deactivate a tenant object', async () => {
      const tenantCreateArgs: Prisma.TenantCreateArgs = {
        data: {
          name: 'tenant1',
          email: 'tenant2@gmail.com',
          isActive: true
        }
      }
      const { id } = await tenantService.create({ ...tenantCreateArgs })
      const tenant = await tenantService.deactivate(id, false)

      expect(tenant.isActive).toBe(false)
    })
  })
})
