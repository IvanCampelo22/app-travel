import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { Account, BookingStatus, Tenant } from '@prisma/client'
import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import * as request from 'supertest'
import { BookingService } from '../lib/booking.service'
import { BookingModule } from './../lib/booking.module'
import supertest = require('supertest')

describe('Booking Controller', () => {
  let app: INestApplication
  let moduleRef: TestingModule
  let bookingService: BookingService
  const PATH = '/bookings'
  let db: DatabaseService
  let franchise: Tenant
  let agency: Account

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [CoreModule, DatabaseModule, BookingModule]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    app = moduleRef.createNestApplication()
    await app.init()
    bookingService = moduleRef.get<BookingService>(BookingService)
    db = moduleRef.get<DatabaseService>(DatabaseService)
  })
  beforeEach(async () => {
    await db.booking.deleteMany({})
  })

  describe('GET /new', () => {
    it('suscefully', async () => {
      franchise = await db.tenant.create({
        data: { name: 'tenant1', email: 'tenant1@gmail.com' }
      })
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
      const booking = await bookingService.new()
      expect(booking.id).toBeDefined()
      expect(booking.tenantId).toEqual(franchise.id)
      expect(booking.accountId).toEqual(agency.id)
      expect(booking.status).toEqual(BookingStatus.WaitingService)
      expect(booking.createdAt).toBeDefined()

      const { ok, body } = await supertest(app.getHttpServer()).get(PATH)

      expect(ok).toBeTruthy()
      expect(body.length).toBe(1)
    })
  })
  describe('GET /index', () => {
    it('suscefully', async () => {
      await bookingService.new()
      await bookingService.new()

      const { ok, body } = await supertest(app.getHttpServer()).get(PATH)

      expect(ok).toBeTruthy()
      expect(body.length).toBe(2)
    })
  })

  describe('GET /find', () => {
    it('suscefully', async () => {
      const booking = await bookingService.new()
      const updateBooking = await bookingService.update(booking.id, {
        customerEmail: 'james@gmail.com'
      })
      const findBooking = await bookingService.find(updateBooking.id)
      const { ok } = await supertest(app.getHttpServer()).get(PATH)
      expect(ok).toBeTruthy()
      expect(findBooking?.customerEmail).toEqual('james@gmail.com')
    })
  })

  describe('PATCH /update', () => {
    it('suscefully', async () => {
      const booking = await bookingService.new()
      const { ok, body } = await supertest(app.getHttpServer())
        .patch(`${PATH}/${booking.id}`)
        .send({ customerName: 'Henry' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body['id']).toBeDefined()
      expect(body['customerName']).toBe('Henry')
    })
  })

  describe('DELETE /destroy', () => {
    it('successfully', async () => {
      await bookingService.new()
      const booking = (await bookingService.findMany())[0]

      const { ok, body } = await request(app.getHttpServer())
        .delete(`${PATH}/${booking.id}`)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body['isActive']).toBeFalsy()
    })
  })
})
