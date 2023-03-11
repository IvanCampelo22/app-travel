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
})
