import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { Account, BookingStatus, Tenant } from '@prisma/client'
import { AccountModule, AccountService } from '@server/account'
import { BookingModule, BookingService } from '@server/booking'
import { CoreModule } from '@server/core'
import { TenantModule, TenantService } from '@server/tenant'
import * as request from 'supertest'
import { BookingproductsModule } from './../lib/bookingproducts.module'

import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'

describe('Booking Controller', () => {
  jest.setTimeout(1000000)

  let app: INestApplication
  let moduleRef: TestingModule
  let bookingService: BookingService
  let accountService: AccountService
  let tenantService: TenantService
  const PATH = '/bookingproducts'
  let db: DatabaseService
  let franchise: Tenant
  let agency: Account

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        CoreModule,
        DatabaseModule,
        BookingModule,
        BookingproductsModule,
        TenantModule,
        AccountModule
      ]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    app = moduleRef.createNestApplication()
    await app.init()
    bookingService = moduleRef.get<BookingService>(BookingService)

    accountService = moduleRef.get<AccountService>(AccountService)
    tenantService = moduleRef.get<TenantService>(TenantService)

    db = moduleRef.get<DatabaseService>(DatabaseService)
  })
  beforeEach(async () => {
    await db.booking.deleteMany({})
    await db.bookingProduct.deleteMany({})
    await db.tenant.deleteMany({})
    await db.account.deleteMany({})
  })

  describe('GET /index', () => {
    it('suscefully', async () => {
      franchise = await db.tenant.create({
        data: {
          name: 'tenant1',
          email: 'tenant1@gmail.com'
        }
      })
      //franchiseMasterUser = (await userService.find(franchise.id))!
      agency = await db.account.create({
        data: {
          tenantId: franchise.id,
          name: 'account1',
          email: 'account1@gmail.com',
          ownerId: 1,
          category: 'Agency',
          phone: '123121313'
        }
      })

      const tenant = await tenantService.create({
        name: 'Nath',
        email: 'nath@gmail.com'
      })

      const booking = await bookingService.new()
      expect(booking.id).toBeDefined()
      expect(booking.tenantId).toEqual(franchise.id)
      expect(booking.accountId).toEqual(agency.id)
      expect(booking.status).toEqual(BookingStatus.WaitingService)
      expect(booking.createdAt).toBeDefined()

      const account = await accountService.create({
        tenantId: tenant.id,
        name: 'account2',
        email: 'account2@gmail.com',
        ownerId: 1,
        category: 'Agency'
      })

      await db.bookingProduct.create({
        data: {
          tenantId: tenant.id,
          bookingId: booking.id,
          accountId: account.id,
          ownerId: 1,
          category: 'Accommodation',
          startDate: new Date(Date.now()),
          endDate: new Date(Date.now()),
          toLocation: 'new york'
        }
      })
      await db.bookingProduct.create({
        data: {
          tenantId: tenant.id,
          bookingId: booking.id,
          accountId: account.id,
          ownerId: 2,
          category: 'Accommodation',
          startDate: new Date(Date.now()),
          endDate: new Date(Date.now()),
          toLocation: 'california'
        }
      })

      const { ok, body } = await request(app.getHttpServer()).get(PATH)
      console.log({ body })
      expect(ok).toBeTruthy()
      expect(body.length).toBe(2)
    })
  })
})
