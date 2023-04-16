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
import { UserModule, UserService } from '@server/user'
import { BookingproductsModule } from './../lib/bookingproducts.module'
import { BookingProductService } from './../lib/bookingproducts.service'
import { CreateBookingProductDto } from './../lib/dto/bookingproduct.create.dto'
describe('BookingProduct Service', () => {
  let bookingProductService: BookingProductService
  let bookingService: BookingService
  let moduleRef: TestingModule
  let db: DatabaseService
  let franchise: Tenant
  let agency: Account
  let accountService: AccountService
  let tenantService: TenantService
  let userService: UserService

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        CoreModule,
        DatabaseModule,
        BookingproductsModule,
        BookingModule,
        TenantModule,
        AccountModule,
        UserModule
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
    userService = moduleRef.get<UserService>(UserService)
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
          toLocation: 'new york',
          adultsCount: 1,
          minorsCount: 3,
          ageOfMinors: [1, 2, 3]
        }
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
          toLocation: 'new york',
          adultsCount: 1,
          minorsCount: 3,
          ageOfMinors: [1, 2, 3]
        }
      })

      const obj = await bookingProductService.findMany(booking.id)
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

      const bookingproduct: CreateBookingProductDto[] = [
        {
          tenantId: tenant.id,
          bookingId: booking.id,
          accountId: account.id,
          ownerId: 1,
          category: 'Accommodation',
          startDate: new Date(Date.now()),
          endDate: new Date(Date.now()),
          toLocation: 'california',
          adultsCount: 1,
          minorsCount: 3,
          ageOfMinors: [1, 2, 3]
        },
        {
          tenantId: tenant.id,
          bookingId: booking.id,
          accountId: account.id,
          ownerId: 1,
          category: 'Accommodation',
          startDate: new Date(Date.now()),
          endDate: new Date(Date.now()),
          toLocation: 'new york',
          adultsCount: 1,
          minorsCount: 3,
          ageOfMinors: [1, 2, 3]
        },
        {
          tenantId: tenant.id,
          bookingId: booking.id,
          accountId: account.id,
          ownerId: 1,
          category: 'Accommodation',
          startDate: new Date(Date.now()),
          endDate: new Date(Date.now()),
          toLocation: 'new orleans',
          adultsCount: 1,
          minorsCount: 3,
          ageOfMinors: [1, 2, 3]
        }
      ]

      await bookingProductService.createMany(bookingproduct)

      const products = await bookingProductService.findMany()

      expect(products).toHaveLength(3)
      expect(products[0].toLocation).toEqual(bookingproduct[0].toLocation)
      expect(products[1].toLocation).toEqual(bookingproduct[1].toLocation)
      expect(products[2].toLocation).toEqual(bookingproduct[2].toLocation)
    })
  })
  describe('find', () => {
    it('should return a one bookingproduct objects', async () => {
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

      const bookingproduct: CreateBookingProductDto[] = [
        {
          tenantId: tenant.id,
          bookingId: booking.id,
          accountId: account.id,
          ownerId: 1,
          category: 'Accommodation',
          startDate: new Date(Date.now()),
          endDate: new Date(Date.now()),
          toLocation: 'california',
          adultsCount: 1,
          minorsCount: 3,
          ageOfMinors: [1, 2, 3]
        }
      ]
      await bookingProductService.createMany(bookingproduct)
      const products = await bookingProductService.findMany(booking.id)

      const objBookingProduct = await bookingProductService.find(products[0].id)

      expect(objBookingProduct?.id).toBeTruthy()
      expect(objBookingProduct?.toLocation).toBe('california')
    })
  })
  describe('update', () => {
    it('should update a bookingproduct object', async () => {
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

      const bookingproduct: CreateBookingProductDto[] = [
        {
          id: 1,
          tenantId: tenant.id,
          bookingId: booking.id,
          accountId: account.id,
          ownerId: 1,
          category: 'Accommodation',
          startDate: new Date(Date.now()),
          endDate: new Date(Date.now()),
          toLocation: 'new york',
          adultsCount: 1,
          minorsCount: 3,
          ageOfMinors: [1, 2, 3]
        }
      ]
      await bookingProductService.createMany(bookingproduct)
      const products = await bookingProductService.findMany(booking.id)
      const objBookingProduct = await bookingProductService.update([
        {
          id: products[0].id,
          toLocation: 'california'
        }
      ])

      expect(objBookingProduct[0].id).toBeTruthy()
      expect(objBookingProduct[0]['toLocation']).toBe('california')
    })
  })
  describe('destroy', () => {
    it('should destroy(soft delete) a tenant object', async () => {
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

      const bookingproduct: CreateBookingProductDto[] = [
        {
          id: 1,
          tenantId: tenant.id,
          bookingId: booking.id,
          accountId: account.id,
          ownerId: 1,
          category: 'Accommodation',
          startDate: new Date(Date.now()),
          endDate: new Date(Date.now()),
          toLocation: 'california',
          adultsCount: 1,
          minorsCount: 2,
          ageOfMinors: [1, 2, 3]
        }
      ]
      await bookingProductService.createMany(bookingproduct)
      const products = await bookingProductService.findMany(booking.id)

      const mock = jest.spyOn(userService, 'destroy')
      const { id } = (await bookingProductService.findMany(booking.id))[0]

      const obj = await bookingProductService.destroy(products[0].id)

      expect(obj.isActive).toBeFalsy()
      expect(mock).toBeCalledWith(id)
    })
  })
})
