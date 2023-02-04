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
import { createOneTenant } from '../specs/tenant.fixtures'

describe('Tenant Service', () => {
  let tenantService: TenantService
  let userService: UserService
  let moduleRef: TestingModule

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [CoreModule, DatabaseModule, TenantModule, UserModule]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    tenantService = moduleRef.get<TenantService>(TenantService)
    userService = moduleRef.get<UserService>(UserService)
  })

  afterAll(() => {
    moduleRef.close()
  })

  describe('create', () => {
    it('should save and return a tenant object', async () => {
      const { id: tenantId } = await tenantService.create(createOneTenant())

      const user = await userService.find({ tenantId })

      expect(user).toBeDefined()
      expect(user?.isActive).toBeTruthy()
      expect(user?.isMaster).toBeTruthy()
    })
  })

  describe('findMany', () => {
    it('should return all tenants objects', async () => {
      await tenantService.create(createOneTenant())

      const tenants = await tenantService.findMany()

      expect(tenants.length).toEqual(2)
    })
  })

  describe('find', () => {
    it('should return one tenant object', async () => {
      const { id, email } = await tenantService.create(createOneTenant())

      const tenant = await tenantService.find({ id })

      expect(tenant?.email).toEqual(email)
    })
  })

  describe('update', () => {
    it('should update a tenant object', async () => {
      const { id } = (await tenantService.findMany())[0]

      const tenant = await tenantService.update({
        where: { id },
        data: {
          email: 'tenant2@gmail.com'
        }
      })

      expect(tenant.email).toBe('tenant2@gmail.com')
    })
  })

  describe('destroy', () => {
    it('should destroy(soft delete) a tenant object', async () => {
      const mock = jest.spyOn(userService, 'destroy')
      const { id } = (await tenantService.findMany())[0]

      const tenant = await tenantService.destroy(id)

      expect(tenant.isActive).toBeFalsy()
      expect(mock).toBeCalledWith(id)
    })
  })
})
