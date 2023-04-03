import { Test, TestingModule } from '@nestjs/testing'
import { Account, BookingStatus, Tenant } from '@prisma/client'
import { AccountModule, AccountService } from '@server/account'
import { BookingModule } from './../lib/booking.module'
import { BookingService } from './../lib/booking.service'

import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { TenantModule, TenantService } from '@server/tenant'
import { UserModule } from '@server/user'
describe('Booking Service', () => {
  jest.setTimeout(100000)
})
let moduleRef: TestingModule
let bookingService: BookingService
let tenantService: TenantService
let accountService: AccountService
//let userService: UserService
let franchise: Tenant
//let franchiseMasterUser: User
let agency: Account
//let agencyMasterUser: User
let db: DatabaseService
beforeAll(async () => {
  moduleRef = await Test.createTestingModule({
    imports: [
      CoreModule,
      DatabaseModule,
      TenantModule,
      UserModule,
      AccountModule,
      BookingModule
    ]
  })
    .overrideProvider(DatabaseService)
    .useClass(DatabaseTestService)
    .compile()

  tenantService = moduleRef.get<TenantService>(TenantService)
  //userService = moduleRef.get<UserService>(UserService)
  accountService = moduleRef.get<AccountService>(AccountService)
  bookingService = moduleRef.get<BookingService>(BookingService)
  db = moduleRef.get<DatabaseService>(DatabaseService)

  franchise = await tenantService.create({
    name: 'tenant1',
    email: 'tenant1@gmail.com'
  })
  //franchiseMasterUser = (await userService.find(franchise.id))!
  agency = await accountService.create({
    tenantId: franchise.id,
    name: 'account1',
    email: 'account1@gmail.com',
    ownerId: 1,
    category: 'Agency',
    phone: '123121313'
  })
  //agencyMasterUser = (await userService.find(agency.id))!
})

beforeEach(async () => {
  await db.booking.deleteMany({})
})

afterAll(() => {
  moduleRef.close()
})

describe('new', () => {
  it('should return a new booking object', async () => {
    // const mock = jest
    //   .spyOn(userService, 'getLoggedUser')
    //   .mockImplementation(() =>
    //     Promise.resolve({ ...agencyMasterUser, account: agency })
    //   )

    const booking = await bookingService.new()

    expect(booking.id).toBeDefined()
    expect(booking.tenantId).toEqual(franchise.id)
    expect(booking.accountId).toEqual(agency.id)
    expect(booking.status).toEqual(BookingStatus.WaitingService)
    expect(booking.createdAt).toBeDefined()

    jest.clearAllMocks()
  })
  // describe('', () => {
  //   it('should ', async () => {
  //     const booking = updateOneBooking(12)
  //     const productArray = booking.data.products?.createMany
  //       ?.data as Array<Prisma.BookingProductCreateManyBookingInput>

  //     expect(productArray).toEqual('')
  //   })
  // })

  describe('index', () => {
    it('should return all objects of the booking', async () => {
      const startDate = new Date(Date.now())

      await bookingService.new()

      await bookingService.new()

      const endDate = new Date(Date.now())

      const objsBooking = await bookingService.findMany(
        startDate,
        endDate,
        0,
        10
      )

      expect(objsBooking.length).toBe(2)
      if (objsBooking[0].createdAt && objsBooking[0].createdAt >= startDate) {
        expect(objsBooking[0].createdAt <= endDate).toBe(true)
      }

      if (objsBooking[1].createdAt && objsBooking[1].createdAt >= startDate) {
        expect(objsBooking[1].createdAt <= endDate).toBe(true)
      }
    })
  })

  describe('find', () => {
    it('should return one booking object', async () => {
      const { id } = await bookingService.new()
      await bookingService.new()

      await bookingService.update(id, {
        customerEmail: 'gabriel@gmail.com'
      })

      const obj = await bookingService.find(id)
      expect(obj?.customerEmail).toBe('gabriel@gmail.com')
    })
  })

  describe('update', () => {
    it('should return a object booking', async () => {
      const booking = await bookingService.new()

      const obj = await bookingService.update(booking.id, {
        customerEmail: 'marco@gmail.com'
      })

      expect(obj.customerEmail).toBe('marco@gmail.com')
    })
  })
})
