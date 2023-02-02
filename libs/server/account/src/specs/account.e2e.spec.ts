import { faker } from '@faker-js/faker'
import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { AccountCategory, Tenant, User } from '@prisma/client'
import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { createOneTenant, TenantModule, TenantService } from '@server/tenant'
import { UserModule, UserService } from '@server/user'
import * as request from 'supertest'
import { AccountModule } from '../lib/account.module'
import { AccountService } from '../lib/account.service'
import { createOneAccount } from './account.fixtures'
import supertest = require('supertest')

describe('Account Controller', () => {
  let app: INestApplication
  let moduleRef: TestingModule
  let accountService: AccountService
  let tenantService: TenantService
  let userService: UserService
  let tenant: Tenant
  let user: User
  const PATH = '/accounts'

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        CoreModule,
        DatabaseModule,
        TenantModule,
        UserModule,
        AccountModule
      ]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    app = moduleRef.createNestApplication()
    await app.init()
    tenantService = moduleRef.get<TenantService>(TenantService)
    userService = moduleRef.get<UserService>(UserService)
    accountService = moduleRef.get<AccountService>(AccountService)

    tenant = await tenantService.create(createOneTenant())
    user = (await userService.find({ tenantId: tenant.id }))!
  })

  describe('GET /accounts', () => {
    it('should return 2 accounts', async () => {
      await accountService.create(
        createOneAccount(tenant.id, user.id, AccountCategory.Agency)
      )
      await accountService.create(
        createOneAccount(tenant.id, user.id, AccountCategory.Agency)
      )

      const { ok, body } = await supertest(app.getHttpServer()).get(PATH)

      expect(ok).toBeTruthy()
      expect(body.length).toBe(2)
    })
  })

  describe('POST /accounts', () => {
    it('successfully', async () => {
      const { data } = createOneAccount(
        tenant.id,
        user.id,
        AccountCategory.Agency
      )

      const { ok, body } = await request(app.getHttpServer())
        .post(PATH)
        .send({ data })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body['isActive']).toBeTruthy()
    })

    it('should throw BadRequestException', async () => {
      const { statusCode } = await request(app.getHttpServer())
        .post(PATH)
        .send({})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(statusCode).toEqual(400)
    })
  })

  describe('PATCH /accounts', () => {
    it('successfully', async () => {
      const { id } = (await accountService.findMany())[2]
      const email = faker.internet.email()

      const { ok, body } = await request(app.getHttpServer())
        .patch(`${PATH}/${id}`)
        .send({ data: { email } })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body.email).toEqual(email)
    })

    it('should throw NotFoundException', async () => {
      const email = faker.internet.email()

      const { statusCode } = await request(app.getHttpServer())
        .patch(`${PATH}/${300}`)
        .send({ data: { email } })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(statusCode).toEqual(404)
    })
  })

  describe('DELETE /accounts', () => {
    it('successfully', async () => {
      const { id } = (await accountService.findMany())[2]

      const { ok, body } = await request(app.getHttpServer())
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
