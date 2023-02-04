import { Test, TestingModule } from '@nestjs/testing'
import {
  Account,
  AccountCategory,
  BookingStatus,
  Tenant,
  User
} from '@prisma/client'
import { AccountModule, AccountService } from '@server/account'
import { createOneAccount } from '@server/account/fixtures'
import { BookingModule } from './../lib/booking.module'
import { BookingService } from './../lib/booking.service'

import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { createOneTenant, TenantModule, TenantService } from '@server/tenant'
import { UserModule, UserService } from '@server/user'
describe('Booking Service', () => {
  let moduleRef: TestingModule
  let bookingService: BookingService
  let tenantService: TenantService
  let accountService: AccountService
  let userService: UserService
  let franchise: Tenant
  let franchiseMasterUser: User
  let agency: Account
  let agencyMasterUser: User

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
    userService = moduleRef.get<UserService>(UserService)
    accountService = moduleRef.get<AccountService>(AccountService)
    bookingService = moduleRef.get<BookingService>(BookingService)

    franchise = await tenantService.create(createOneTenant())
    franchiseMasterUser = (await userService.find({ tenantId: franchise.id }))!
    agency = await accountService.create(
      createOneAccount(
        franchise.id,
        franchiseMasterUser.id,
        AccountCategory.Agency
      )
    )
    agencyMasterUser = (await userService.find({ accountId: agency.id }))!
  })

  afterAll(() => {
    moduleRef.close()
  })

  describe('new', () => {
    it('should return a new booking object', async () => {
      const mock = jest
        .spyOn(userService, 'getLoggedUser')
        .mockImplementation(() =>
          Promise.resolve({ ...agencyMasterUser, account: agency })
        )

      const booking = await bookingService.new('12')

      expect(booking.id).toBeDefined()
      expect(mock).toBeCalledWith('12')
      expect(booking.tenantId).toEqual(franchise.id)
      expect(booking.accountId).toEqual(agency.id)
      expect(booking.ownerId).toEqual(agencyMasterUser.id)
      expect(booking.status).toEqual(BookingStatus.WaitingService)
      expect(booking.createdAt).toBeDefined()

      jest.clearAllMocks()
    })
  })
})
