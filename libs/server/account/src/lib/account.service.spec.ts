import { Test, TestingModule } from '@nestjs/testing'
import { Prisma, Tenant } from '@prisma/client'
import { CoreModule } from '@server/core'
import { DatabaseModule, DatabaseService } from '@server/database'

import { AccountModule } from './account.module'
import { AccountService } from './account.service'

describe('Account Service', () => {
  let accountService: AccountService
  let db: DatabaseService
  let tenant: Tenant

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, DatabaseModule, AccountModule]
    }).compile()

    accountService = moduleRef.get<AccountService>(AccountService)
    db = moduleRef.get<DatabaseService>(DatabaseService)

    tenant = await db.tenant.create({
      data: {
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      }
    })
  })

  afterEach(async () => {
    await db.account.deleteMany({})
  })

  afterAll(async () => {
    await db.tenant.deleteMany({})
    await db.$disconnect()
  })

  describe('create', () => {
    it('should save and return a account object', async () => {
      const { id: tenantId } = tenant

      const accountCreateArgs: Prisma.AccountCreateArgs = {
        data: {
          tenantId,
          name: 'Account1',
          email: 'account1@gmail.com'
        }
      }
      const account = await accountService.create(accountCreateArgs)

      expect(account.email).toBe('account1@gmail.com')
    })
  })

  describe('findMany', () => {
    it('should find all account objects', async () => {
      const { id: tenantId } = tenant

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
      const accounts = await db.account.findMany()

      expect(accounts.length).toBe(2)
    })
  })

  describe('update', () => {
    it('should update a object account', async () => {
      const { id: tenantId } = tenant

      const accountCreateArgs: Prisma.AccountCreateArgs = {
        data: {
          tenantId,
          name: 'account1',
          email: 'account1@gmail.com'
        }
      }
      const { id } = await db.account.create(accountCreateArgs)
      const accountUpdateArgs: Prisma.AccountUpdateArgs = {
        where: { id },
        data: {
          name: 'account2',
          email: 'account2@gmail.com'
        }
      }

      const account = await db.account.update(accountUpdateArgs)
      expect(account.email).toBe('account2@gmail.com')
    })
  })

  describe('deactivate', () => {
    it('should deactivate a account object', async () => {
      const { id: tenantId } = tenant

      const accountCreateArgs: Prisma.AccountCreateArgs = {
        data: {
          tenantId: tenantId,
          name: 'account1',
          email: 'account1@gmail.com'
        }
      }

      const { id: accountId } = await db.account.create(accountCreateArgs)
      const account = await accountService.deactivate(accountId, false)

      expect(account.isActive).toBe(false)
    })
  })
})
