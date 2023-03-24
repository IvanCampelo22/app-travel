import { Test, TestingModule } from '@nestjs/testing'
import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { UserModule, UserService } from '@server/user'
import { TenantModule } from '../lib/tenant.module'
import { TenantService } from '../lib/tenant.service'
import { CreateTenantDto } from './../lib/dto/tenant.create.dto'

describe('Tenant Service', () => {
  let tenantService: TenantService
  let userService: UserService
  let moduleRef: TestingModule
  let db: DatabaseService

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [CoreModule, DatabaseModule, TenantModule, UserModule]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    tenantService = moduleRef.get<TenantService>(TenantService)
    userService = moduleRef.get<UserService>(UserService)
    db = moduleRef.get<DatabaseService>(DatabaseService)
  })
  beforeEach(async () => {
    await db.account.deleteMany({})
    await db.tenant.deleteMany({})
    await db.user.deleteMany({})
  })

  afterAll(() => {
    moduleRef.close()
  })

  describe('create', () => {
    it('should save and return a tenant object', async () => {
      const createTenant: CreateTenantDto = {
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      }
      const tenant = await tenantService.create(createTenant)
      expect(tenant.name).toBe('tenant1')
    })
  })

  describe('findMany', () => {
    it('should return all tenants objects', async () => {
      const createTenant1: CreateTenantDto = {
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      }

      const createTenant2: CreateTenantDto = {
        name: 'tenant2',
        email: 'tenant2@gmail.com'
      }

      await tenantService.create(createTenant1)
      await tenantService.create(createTenant2)

      const tenants = await tenantService.findMany()

      expect(tenants.length).toEqual(2)
    })
  })

  describe('find', () => {
    it('should return one tenant object', async () => {
      const createTenant: CreateTenantDto = {
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      }
      const { id, email } = await tenantService.create(createTenant)

      const tenant = await tenantService.find(id)

      expect(tenant?.email).toEqual(email)
    })
  })

  describe('update', () => {
    it('should update a tenant object', async () => {
      const createTenant: CreateTenantDto = {
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      }

      await tenantService.create(createTenant)
      const { id } = (await tenantService.findMany())[0]

      const tenant = await tenantService.update(id, {
        email: 'tenant2@gmail.com'
      })

      expect(tenant.email).toBe('tenant2@gmail.com')
    })
  })

  describe('destroy', () => {
    it('should destroy(soft delete) a tenant object', async () => {
      const createObj: CreateTenantDto = {
        name: 'Tenant1',
        email: 'tenant1@gmail.com'
      }
      await tenantService.create(createObj)
      const mock = jest.spyOn(userService, 'destroy')
      const { id } = (await tenantService.findMany())[0]

      const tenant = await tenantService.destroy(id)

      expect(tenant.isActive).toBeFalsy()
      expect(mock).toBeCalledWith(id)
    })
  })
})
