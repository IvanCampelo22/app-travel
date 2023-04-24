import { Test, TestingModule } from '@nestjs/testing'
import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { CreateTenantDto } from '@server/tenant'
import { CreateAccountDto } from './../lib/dto/account.create.dto'

import { TenantModule, TenantService } from '@server/tenant'
import { UserModule, UserService } from '@server/user'
import { AccountModule } from '../lib/account.module'
import { AccountService } from '../lib/account.service'

describe('Account Service', () => {
  let tenantService: TenantService
  let accountService: AccountService
  let userService: UserService
  let moduleRef: TestingModule
  let db: DatabaseService

  beforeAll(async () => {
    jest.setTimeout(1000000)

    moduleRef = await Test.createTestingModule({
      imports: [
        CoreModule,
        DatabaseModule,
        TenantModule,
        AccountModule,
        UserModule
      ]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    accountService = moduleRef.get<AccountService>(AccountService)
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
    it('should save and return a account object', async () => {
      const createTenant: CreateTenantDto = {
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      }

      const { id } = await tenantService.create(createTenant)
      const createAccount: CreateAccountDto = {
        tenantId: id,
        name: 'account1',
        email: 'account1@gmail.com',
        ownerId: 1,
        category: 'Agency'
      }
      const objAccount = await accountService.create(createAccount)

      expect(objAccount.name).toBe('account1')
    })
  })

  describe('findMany', () => {
    it('should find all account objects', async () => {
      const createTenant1: CreateTenantDto = {
        name: 'Tenant1',
        email: 'tenant1@gmail.com'
      }

      const { id } = await tenantService.create(createTenant1)

      const createAccount1: CreateAccountDto = {
        tenantId: id,
        name: 'account1',
        email: 'account1@gmail.com',
        ownerId: 1,
        category: 'Agency'
      }

      const createAccount2: CreateAccountDto = {
        tenantId: id,
        name: 'account2',
        email: 'account2@gmail.com',
        ownerId: 1,
        category: 'Agency'
      }

      await accountService.create(createAccount1)

      await accountService.create(createAccount2)

      const accounts = await accountService.findMany()

      expect(accounts.length).toBe(2)
    })
  })

  describe('update', () => {
    it('should update a object account', async () => {
      const createTenant: CreateTenantDto = {
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      }

      const obj = await tenantService.create(createTenant)
      const createAccount: CreateAccountDto = {
        tenantId: obj.id,
        name: 'Account1',
        email: 'account1@gmail.com',
        ownerId: 1,
        category: 'Agency'
      }

      await accountService.create(createAccount)
      const { id } = (await accountService.findMany())[0]

      const { email } = await accountService.update(id, {
        email: 'account2@gmail.com'
      })

      expect(email).toBe('account2@gmail.com')
    })
  })

  describe('destroy', () => {
    it('should disabled a account', async () => {
      const createTenant: CreateTenantDto = {
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      }

      const obj = await tenantService.create(createTenant)

      const createAccount: CreateAccountDto = {
        tenantId: obj.id,
        name: 'Account1',
        email: 'account1@gmail.com',
        ownerId: 1,
        category: 'Agency'
      }
      await accountService.create(createAccount)
      const mock = jest.spyOn(userService, 'destroy')
      const { id } = (await accountService.findMany())[0]

      const { isActive } = await accountService.destroy(id)

      expect(isActive).toBe(false)
      expect(mock).toBeCalledWith(id)
    })
  })
})
