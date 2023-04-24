import { faker } from '@faker-js/faker'
import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
//import { Tenant } from '@prisma/client'
import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { TenantModule, TenantService } from '@server/tenant'
import { UserModule } from '@server/user'
import * as request from 'supertest'
import { AccountModule } from '../lib/account.module'
import { AccountService } from '../lib/account.service'
import supertest = require('supertest')

describe('Account Controller', () => {
  jest.setTimeout(1000000)

  let app: INestApplication
  let moduleRef: TestingModule
  let accountService: AccountService
  let tenantService: TenantService
  //let userService: UserService
  //let tenant: Tenant
  //let user: User
  const PATH = '/accounts'
  let db: DatabaseService

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
    //userService = moduleRef.get<UserService>(UserService)
    accountService = moduleRef.get<AccountService>(AccountService)
    db = moduleRef.get<DatabaseService>(DatabaseService)

    //tenant = await tenantService.create({
    //name: 'tenant1',
    //email: 'tenant1@gmail.com'
    //})
    //user = (await userService.find(tenant.id))!
  })
  beforeEach(async () => {
    await db.account.deleteMany({})
    await db.tenant.deleteMany({})
    await db.user.deleteMany({})
  })

  describe('GET /accounts', () => {
    it('should return 2 accounts', async () => {
      const tenantObj = await tenantService.create({
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      })
      await accountService.create({
        tenantId: tenantObj.id,
        name: 'account1',
        email: 'account1@gmail.com',
        ownerId: 1,
        category: 'Agency'
      })
      await accountService.create({
        tenantId: tenantObj.id,
        name: 'account2',
        email: 'account2@gmail.com',
        ownerId: 2,
        category: 'Agency'
      })

      const { ok, body } = await supertest(app.getHttpServer()).get(PATH)

      expect(ok).toBeTruthy()
      expect(body.length).toBe(2)
    })
  })

  describe('POST /accounts', () => {
    it('successfully', async () => {
      const tenantObj1 = await tenantService.create({
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      })

      const { ok, body } = await request(app.getHttpServer())
        .post(PATH)
        .send({
          tenantId: tenantObj1.id,
          name: 'account1',
          email: 'account1@gmail.com',
          ownerId: 1,
          category: 'Agency'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body['isActive']).toBeTruthy()
    })

    it('suppliers suscefully', async () => {
      const tenantObj = await tenantService.create({
        name: 'Maria',
        email: 'maria@gmail.com'
      })
      const { ok, body } = await request(app.getHttpServer())
        .post(PATH)
        .send({
          tenantId: tenantObj.id,
          name: 'account1',
          email: 'account1@gmail.com',
          ownerId: 1,
          category: 'Supplier'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body['isActive']).toBeTruthy()
      expect(body['category']).toEqual('Supplier')
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
      const tenantObj2 = await tenantService.create({
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      })
      const { id } = await accountService.create({
        tenantId: tenantObj2.id,
        name: 'account1',
        email: 'account1@gmail.com',
        ownerId: 1,
        category: 'Agency'
      })
      const { ok, body } = await request(app.getHttpServer())
        .patch(`${PATH}/${id}`)
        .send({ email: 'account2@gmail.com' })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)

      expect(ok).toBeTruthy()
      expect(body.email).toEqual('account2@gmail.com')
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
      const tenant = await tenantService.create({
        name: 'tenant1',
        email: 'tenant1@gmail.com'
      })
      await accountService.create({
        tenantId: tenant.id,
        name: 'account1',
        email: 'account1@gmail.com',
        category: 'Agency',
        ownerId: 1
      })
      await accountService.create({
        tenantId: tenant.id,
        name: 'account2',
        email: 'account2@gmail.com',
        category: 'Agency',
        ownerId: 2
      })
      const account = (await accountService.findMany())[0]

      const { ok, body } = await request(app.getHttpServer())
        .delete(`${PATH}/${account.id}`)
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
