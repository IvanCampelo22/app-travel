import { Test, TestingModule } from '@nestjs/testing'
import { Tenant, User } from '@prisma/client'
import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { CreateAccountDto } from './../lib/dto/account.create.dto'

import { TenantModule, TenantService } from '@server/tenant'
import { createOneTenant } from '@server/tenant/fixtures'
import { UserModule, UserService } from '@server/user'
import { AccountModule } from '../lib/account.module'
import { AccountService } from '../lib/account.service'

describe('Account Service', () => {
  let moduleRef: TestingModule
  let accountService: AccountService
  let tenantService: TenantService
  let userService: UserService
  let tenant: Tenant
  let user: User

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        CoreModule,
        DatabaseModule,
        TenantModule,
        UserModule,
        AccountModule
      ]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    tenantService = moduleRef.get<TenantService>(TenantService)
    userService = moduleRef.get<UserService>(UserService)
    accountService = moduleRef.get<AccountService>(AccountService)

    tenant = await tenantService.create(createOneTenant())
    user = (await userService.find({ tenantId: tenant.id }))!
  })

  afterAll(async () => {
    moduleRef.close()
  })

  describe('create', () => {
    it('should save and return a account object', async () => {
      const createAccount: CreateAccountDto = {
        tenantId: 1,
        name: 'account1',
        email: 'account1@gmail.com',
        ownerId: 1,
        category: 'Agency',
        phone: '12345678'
      }
      const { email, ownerId, isActive, id } = await accountService.create(
        createAccount
      )

      const adminUser = await userService.find({ accountId: id })

      expect(email).toBeDefined()
      expect(ownerId).toEqual(user.id)
      expect(isActive).toBeTruthy()
      expect(adminUser).toBeDefined()
      expect(adminUser?.isActive).toBeTruthy()
      expect(adminUser?.isMaster).toBeTruthy()
    })
  })

  describe('findMany', () => {
    it('should find all account objects', async () => {
      const createAccount1: CreateAccountDto = {
        tenantId: 1,
        name: 'account1',
        email: 'account1@gmail.com',
        ownerId: 1,
        category: 'Agency',
        phone: '123476371'
      }

      const createAccount2: CreateAccountDto = {
        tenantId: 1,
        name: 'account2',
        email: 'account2@gmail.com',
        ownerId: 1,
        category: 'Agency',
        phone: '12342133'
      }

      await accountService.create(createAccount1)

      await accountService.create(createAccount2)

      const accounts = await accountService.findMany()

      expect(accounts.length).toBe(2)
    })
  })

  describe('update', () => {
    it('should update a object account', async () => {
      const createAccount: CreateAccountDto = {
        tenantId: 1,
        name: 'Account1',
        email: 'account1@gmail.com',
        ownerId: 1,
        category: 'Agency',
        phone: '123421221'
      }

      await accountService.create(createAccount)
      const { id } = (await accountService.findMany())[1]

      const { email } = await accountService.update(id, {
        tenantId: 1,
        ownerId: 1,
        name: 'name',
        category: 'Agency',
        email: 'account2@gmail.com',
        phone: '12342'
      })

      expect(email).toBe('account2@gmail.com')
    })
  })

  describe('destroy', () => {
    it('should disabled a account', async () => {
      const mock = jest.spyOn(userService, 'destroy')
      const { id } = (await accountService.findMany())[1]

      const { isActive } = await accountService.destroy(id)

      expect(isActive).toBe(false)
      expect(mock).toBeCalledWith(id)
    })
  })
})
