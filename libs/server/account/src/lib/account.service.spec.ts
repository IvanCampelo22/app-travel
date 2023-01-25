import { Test, TestingModule } from '@nestjs/testing'
import { Prisma } from '@prisma/client'
import { CoreModule } from '@server/core'
import { DatabaseModule, DatabaseService } from '@server/database'
import { AccountModule } from './account.module'
import { AccountService } from './account.service'

describe('Account Service', () => {
  let accountService: AccountService
  let db: DatabaseService

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, DatabaseModule, AccountModule]
    }).compile()

    accountService = moduleRef.get<AccountService>(AccountService)
    db = moduleRef.get<DatabaseService>(DatabaseService)
  })

  afterEach(async () => {
    await db.account.deleteMany({})
  })

  afterAll(async () => {
    await db.$disconnect()
  })

  describe('create', () => {
    it('should save and return a account object', async () => {
      const tenantInput: Prisma.TenantCreateArgs = {
        data: {
          name: 'tenant1',
          email: 'tenant1@gmail.com'
        }
      }
      const { id: tenantId } = await db.tenant.create(tenantInput)

      const accountInput: Prisma.AccountCreateArgs = {
        data: {
          tenantId,
          name: 'Account1',
          email: 'account1@gmail.com'
        }
      }
      const account = await accountService.create(accountInput)

      expect(account.email).toBe('account1@gmail.com')
    })
  })

  describe('findMany', () => {
    it('should find all account objects', async () => {
      const tenantCreateArgs: Prisma.TenantCreateArgs = {
        data: {
          name: 'tenant1',
          email: 'tenant1@gmail.com'
        }
      }

      const { id: tenantId } = await db.tenant.create(tenantCreateArgs)

      const accountCreateArgs: Prisma.AccountCreateManyArgs = {
        data: [
          {
            tenantId,
            name: 'Account1',
            email: 'account1@gmail.com'
          },
          {
            tenantId,
            name: 'Account2',
            email: 'account2@gmail.com'
          }
        ]
      }

      await db.account.createMany(accountCreateArgs)

      const input2: Prisma.AccountCreateArgs = {
        data: {
          tenantId,
          name: 'Account2',
          email: 'account2@gmail.com'
        }
      }

      await db.account.create(input2)

      const accountObjs = await db.account.findMany()
      expect(accountObjs.length).toBe(2)
    })
  })

  describe('update', () => {
    it('should update a object account', async () => {
      const inputTenant: Prisma.TenantCreateArgs = {
        data: {
          name: 'tenant1',
          email: 'tenant1@gmail.com'
        }
      }
      await db.tenant.create(inputTenant)
      const objs = await db.tenant.findFirst()

      const inputAccount: Prisma.AccountCreateArgs = {
        data: {
          tenantId: objs!.id,
          name: 'account1',
          email: 'account1@gmail.com'
        }
      }
      await db.account.create(inputAccount)
      const objsAccount = await db.account.findFirst()
      const updateAccount: Prisma.AccountUpdateArgs = {
        where: { id: objsAccount!.id },
        data: {
          name: 'account2',
          email: 'account2@gmail.com'
        }
      }
      const account = await db.account.update(updateAccount)
      expect(account.email).toBe('account2@gmail.com')
    })
  })

  describe('deactivate', () => {
    it('should deactivate a account object', async () => {
      const inputTenant: Prisma.TenantCreateArgs = {
        data: {
          name: 'tenant1',
          email: 'tenant1@gmail.com'
        }
      }
      const { id: tenantId } = await db.tenant.create(inputTenant)

      const inputAccount: Prisma.AccountCreateArgs = {
        data: {
          tenantId: tenantId,
          name: 'account1',
          email: 'account1@gmail.com'
        }
      }
      const { id: accountId } = await db.account.create(inputAccount)

      const account = await accountService.deactivate(accountId, false)
      expect(account.isActive).toBe(false)
    })
  })
})
