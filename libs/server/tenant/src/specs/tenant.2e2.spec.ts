import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { UserModule } from '@server/user'
import * as request from 'supertest'
import { TenantModule } from '../lib/tenant.module'
import { TenantService } from '../lib/tenant.service'
import { createOneTenant } from './tenant.fixtures'

describe('Tenant Controller', () => {
  let app: INestApplication
  let tenantService: TenantService
  let moduleRef: TestingModule
  const PATH = '/tenants'

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [CoreModule, DatabaseModule, TenantModule, UserModule]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    app = moduleRef.createNestApplication()
    await app.init()
    tenantService = moduleRef.get<TenantService>(TenantService)
  })

  afterAll(async () => {
    await moduleRef.close()
  })

  describe('GET /tenants', () => {
    it('sucessfully', async () => {
      await tenantService.create(createOneTenant())
      await tenantService.create(createOneTenant())

      const { ok, body } = await request(app.getHttpServer()).get(PATH)

      expect(ok).toBeTruthy()
      expect(body.length).toBe(2)
    })
  })

  describe('POST /tenants', () => {
    it('successfully', async () => {
      const { data } = createOneTenant()

      const { ok, body } = await request(app.getHttpServer())
        .post(PATH)
        .send({ data })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body['email']).toEqual(data.email)
    })

    it('should throw BadRequestException', async () => {
      const { statusCode } = await request(app.getHttpServer())
        .post(PATH)
        .send({ data: {} })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(statusCode).toEqual(400)
    })
  })

  describe('/PACTH tenants', () => {
    it('successfully', async () => {
      const { id } = await tenantService.create(createOneTenant())

      const { body, ok } = await request(app.getHttpServer())
        .patch(`${PATH}/${id}`)
        .send({ data: { email: 'tenant2@gmail.com' } })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body['id']).toBeDefined()
      expect(body['email']).toBe('tenant2@gmail.com')
    })

    it('should throw NotFoundException', async () => {
      const { statusCode } = await request(app.getHttpServer())
        .patch(`${PATH}/${300}`)
        .send({ data: { email: 'tenant2@gmail.com' } })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(statusCode).toEqual(404)
    })
  })

  describe('/DELETE tenants', () => {
    it('successfully', async () => {
      const { id } = await tenantService.create(createOneTenant())

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
