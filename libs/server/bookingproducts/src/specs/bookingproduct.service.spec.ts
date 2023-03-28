import { Test, TestingModule } from '@nestjs/testing'
import { Account, BookingStatus, Tenant } from '@prisma/client'
import { AccountModule, AccountService } from '@server/account'
import { BookingModule, BookingService } from '@server/booking'
import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { TenantModule, TenantService } from '@server/tenant'
import { BookingproductsModule } from './../lib/bookingproducts.module'
import { BookingProductService } from './../lib/bookingproducts.service'
describe('BookingProduct Service', () => {
  let bookingProductService: BookingProductService
  let bookingService: BookingService
  let moduleRef: TestingModule
  let db: DatabaseService
  let franchise: Tenant
  let agency: Account
  let accountService: AccountService
  let tenantService: TenantService

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        CoreModule,
        DatabaseModule,
        BookingproductsModule,
        BookingModule,
        TenantModule,
        AccountModule
      ]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    bookingProductService = moduleRef.get<BookingProductService>(
      BookingProductService
    )
    bookingService = moduleRef.get<BookingService>(BookingService)
    accountService = moduleRef.get<AccountService>(AccountService)
    tenantService = moduleRef.get<TenantService>(TenantService)
    db = moduleRef.get<DatabaseService>(DatabaseService)
  })

  beforeEach(async () => {
    await db.bookingProduct.deleteMany({})
    await db.booking.deleteMany({})
    await db.account.deleteMany({})
    await db.tenant.deleteMany({})
  })

  afterAll(() => {
    moduleRef.close()
  })

  describe('findmany', () => {
    it('should return all booking objects', async () => {
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

      const obj = await bookingProductService.findMany()

      expect(obj.length).toBe(2)
    })
  })
  describe('create', () => {
    it('should create a object bookingproducts', async () => {
      franchise = await db.tenant.create({
        data: {
          name: 'tenant2',
          email: 'tenant2@gmail.com'
        }
      })
      //franchiseMasterUser = (await userService.find(franchise.id))!
      agency = await db.account.create({
        data: {
          tenantId: franchise.id,
          name: 'account2',
          email: 'account2@gmail.com',
          ownerId: 2,
          category: 'Agency',
          phone: '123121313'
        }
      })

      const tenant = await db.tenant.create({
        data: { name: 'Nath', email: 'nath@gmail.com' }
      })
      const booking = await bookingService.new()
      expect(booking.id).toBeDefined()
      expect(booking.tenantId).toEqual(franchise.id)
      expect(booking.accountId).toEqual(agency.id)
      expect(booking.status).toEqual(BookingStatus.WaitingService)
      expect(booking.createdAt).toBeDefined()

      const account = await accountService.create({
        tenantId: tenant.id,
        name: 'account3',
        email: 'account3@gmail.com',
        ownerId: 1,
        category: 'Agency'
      })

      const bookingproduct = await bookingProductService.create({
        tenantId: tenant.id,
        bookingId: booking.id,
        accountId: account.id,
        ownerId: 1,
        category: 'Accommodation',
        startDate: new Date(Date.now()),
        endDate: new Date(Date.now()),
        toLocation: 'california'
      })

      expect(bookingproduct.toLocation).toBe('california')
    })
  })
})
