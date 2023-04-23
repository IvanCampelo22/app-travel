import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { Account, Tenant } from '@prisma/client'
import { AccountModule, AccountService } from '@server/account'
import { CoreModule } from '@server/core'
import { TenantModule, TenantService } from '@server/tenant'
import * as request from 'supertest'
import { BookingproductsModule } from './../lib/bookingproducts.module'

import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import supertest = require('supertest')

describe('BookingProducts Controller', () => {
  jest.setTimeout(1000000)

  let app: INestApplication
  let moduleRef: TestingModule
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

      const booking = await db.booking.create({
        data: { tenantId: franchise.id, accountId: agency.id }
      })

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
          minorsCount: 2,
          ageOfMinors: [1, 2, 3]
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
          toLocation: 'california',
          adultsCount: 1,
          minorsCount: 2,
          ageOfMinors: [1, 2, 3]
        }
      })

      const { ok, body } = await request(app.getHttpServer()).get(
        `${PATH}/${booking.id}`
      )
      console.log(body)
      expect(ok).toBeTruthy()
      expect(body.length).toBe(2)
    })
  })
  describe('POST /post', () => {
    it('successfully', async () => {
      const tenant = await tenantService.create({
        name: 'Nath',
        email: 'nath@gmail.com'
      })

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

      const booking = await db.booking.create({
        data: { tenantId: franchise.id, accountId: agency.id }
      })

      const account = await accountService.create({
        tenantId: tenant.id,
        name: 'account2',
        email: 'account2@gmail.com',
        ownerId: 1,
        category: 'Agency'
      })

      const startDate = new Date(Date.now())
      const endDate = new Date(Date.now())

      const { body } = await supertest(app.getHttpServer())
        .post(PATH)
        .send({
          data: [
            {
              tenantId: tenant.id,
              bookingId: booking.id,
              accountId: account.id,
              ownerId: 1,
              category: 'Accommodation',
              startDate: startDate.toISOString(),
              endDate: endDate.toISOString(),
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
              startDate: startDate.toISOString(),
              endDate: endDate.toISOString(),
              toLocation: 'Boston',
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
              startDate: startDate.toISOString(),
              endDate: endDate.toISOString(),
              toLocation: 'Kansas',
              adultsCount: 1,
              minorsCount: 3,
              ageOfMinors: [1, 2, 3]
            }
          ]
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      const products = await db.bookingProduct.findMany()

      expect(body).toBeDefined()
      expect(body.count).toEqual(3)
      expect(products[0]['toLocation']).toEqual('california')
    })
  })
  describe('PACTH /bookingproducts', () => {
    it('successfully', async () => {
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

      const booking = await db.booking.create({
        data: { tenantId: franchise.id, accountId: agency.id }
      })

      const account = await accountService.create({
        tenantId: tenant.id,
        name: 'account2',
        email: 'account2@gmail.com',
        ownerId: 1,
        category: 'Agency'
      })

      const { id } = await db.bookingProduct.create({
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
          minorsCount: 2,
          ageOfMinors: [1, 2, 3]
        }
      })

      const { body, ok } = await supertest(app.getHttpServer())
        .patch(`${PATH}`)
        .send([{ id: id, toLocation: 'new orleans' }])
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body[0]['toLocation']).toBe('new orleans')
    })
    it('should throw NotFoundException', async () => {
      const { statusCode } = await request(app.getHttpServer())
        .patch(`${PATH}/${300}`)
        .send({ data: { toLocation: 'Londres' } })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(statusCode).toEqual(404)
    })
  })
  describe('/DELETE bookingproducts', () => {
    it('successfully', async () => {
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

      const booking = await db.booking.create({
        data: { tenantId: franchise.id, accountId: agency.id }
      })

      const account = await accountService.create({
        tenantId: tenant.id,
        name: 'account2',
        email: 'account2@gmail.com',
        ownerId: 1,
        category: 'Agency'
      })

      const { id } = await db.bookingProduct.create({
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
          minorsCount: 2,
          ageOfMinors: [1, 2, 3]
        }
      })
      const { body, ok } = await request(app.getHttpServer())
        .delete(`${PATH}/${id}`)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body['isActive']).toBeFalsy()
    })
    it('should throw NotFoundException', async () => {
      const { statusCode } = await request(app.getHttpServer())
        .delete(`${PATH}/${300}`)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(statusCode).toEqual(404)
    })
  })
})
