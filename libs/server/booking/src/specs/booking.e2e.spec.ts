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
  jest.setTimeout(1000000)

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

      const response = await supertest(app.getHttpServer()).get(PATH)

      expect(response.body.bookings).toHaveLength(1)
    })
  })
  describe('GET /index', () => {
    it('suscefully', async () => {
      await bookingService.new()
      await bookingService.new()

      const response = await supertest(app.getHttpServer()).get(PATH)
      expect(response.body.bookings).toHaveLength(2)
    })
    it('should return filtered bookings', async () => {
      const startDate = new Date('2021-03-02')
      const endDate = new Date('2025-06-02')
      const booking1 = await bookingService.new()
      booking1.createdAt = new Date(Date.now())
      const booking2 = await bookingService.new()
      booking2.createdAt = new Date(Date.now())
      const response = await request(app.getHttpServer())
        .get(
          `/bookings?start_date=${startDate.toISOString()}&end_date=${endDate.toISOString()}`
        )
        .expect(200)
      expect(response.body.bookings).toHaveLength(2)
      const filteredResponse = await request(app.getHttpServer())
        .get(`/bookings?start_date=${startDate.toISOString()}`)
        .expect(200)
      expect(filteredResponse.body.bookings).toHaveLength(2)
    })
    it('should return 0 bookings objects', async () => {
      const startDate = new Date('2025-03-02')
      const endDate = new Date('2029-06-02')
      const booking1 = await bookingService.new()
      booking1.createdAt = new Date(Date.now())
      const booking2 = await bookingService.new()
      booking2.createdAt = new Date(Date.now())
      const response = await request(app.getHttpServer())
        .get(
          `/bookings?start_date=${startDate.toISOString()}&end_date=${endDate.toISOString()}`
        )
        .expect(200)
      expect(response.body.bookings).toHaveLength(0)
      const filteredResponse = await request(app.getHttpServer())
        .get(`/bookings?start_date=${startDate.toISOString()}`)
        .expect(200)
      expect(filteredResponse.body.bookings).toHaveLength(0)
    })
    it('should work pagination', async () => {
      for (let i = 0; i < 23; i++) {
        await bookingService.new()
      }

      const page_Number = 1
      const page_Size = 10
      const response = await request(app.getHttpServer())
        .get(
          `/bookings?pageNumber=${page_Number.toString()}&pageSize=${page_Size.toString()}`
        )
        .expect(200)
      expect(response.body.bookings).toHaveLength(10)
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
    it('should throw NotFoundException', async () => {
      const { statusCode } = await request(app.getHttpServer())
        .post(PATH)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(statusCode).toEqual(404)
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
    it('should throw NotFoundException', async () => {
      const { statusCode } = await request(app.getHttpServer())
        .patch(`${PATH}/${200}`)
        .send({ customerName: 'Henry' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(statusCode).toEqual(404)
    })
  })

  describe('DELETE /destroy', () => {
    it('successfully', async () => {
      const startDate = new Date(Date.now())
      await bookingService.new()
      const endDate = new Date(Date.now())
      const page = 0
      const size = 10
      const booking = (
        await bookingService.findMany(startDate, endDate, page, size)
      )[0]
      console.log('boking', booking)

      const { ok, body } = await request(app.getHttpServer())
        .delete(`${PATH}/${booking.id}`)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body['isActive']).toBeFalsy()
    })
    it('should throw NotFoundException', async () => {
      const { statusCode } = await request(app.getHttpServer())
        .patch(`${PATH}/${200}`)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(statusCode).toEqual(404)
    })
  })
})
