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

  beforeEach(async () => {
    await db.tenant.deleteMany({})
  })

  afterEach(async () => {
    await db.$disconnect()
  })

  describe('create', () => {
    it('should save and return a tenant object', async () => {
      const input: Prisma.TenantCreateArgs = {
        data: {
          name: 'Tenant 1',
          email: 'tenant1@gmail.com'
        }
      }

      const tenant = await tenantService.create(input)

      expect(tenant.email).toBe('tenant1@gmail.com')
    })
  })

  describe('findMany', () => {
    it('should return all tenants objects', async () => {
      const input1: Prisma.TenantCreateArgs = {
        data: {
          name: 'tenant1',
          email: 'tenant1@gmail.com'
        }
      }
      const input2: Prisma.TenantCreateArgs = {
        data: {
          name: 'tenant2',
          email: 'tenant2@gmail.com'
        }
      }

      await db.tenant.create({ ...input1 })
      await db.tenant.create({ ...input2 })

      const tenant = await tenantService.findMany()
      expect(tenant.length).toBe(2)
    })
  })
  describe('update', () => {
    it('should update a tenant object', async () => {
      const input: Prisma.TenantCreateArgs = {
        data: {
          name: 'tenant1',
          email: 'tenant1@gmail.com'
        }
      }

      await tenantService.create({ ...input })
      const obj = await db.tenant.findFirst()

      const updateTenant: Prisma.TenantUpdateArgs = {
        where: { id: obj!.id },
        data: {
          name: 'Tenant2',
          email: 'tenant2@gmail.com'
        }
      }
      const tenant = await tenantService.update(updateTenant)
      expect(tenant.name).toBe('Tenant2')
    })
  })

  describe('deactivate', () => {
    it('should deactivate a tenant object', async () => {
      const input: Prisma.TenantCreateArgs = {
        data: {
          name: 'tenant1',
          email: 'tenant2@gmail.com',
          isActive: true
        }
      }
      await tenantService.create({ ...input })
      const obj = await db.tenant.findFirst()

      const tenant = await tenantService.deactivate(obj!.id, false)
      expect(tenant.isActive).toBe(false)
    })
  })
})
