import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { UserModule } from '../lib/user.module'
import { UserService } from '../lib/user.service'
import supertest = require('supertest')

describe('Booking Controller', () => {
  jest.setTimeout(1000000)

  let app: INestApplication
  let moduleRef: TestingModule
  const PATH = '/users'
  let db: DatabaseService
  let userService: UserService

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [CoreModule, DatabaseModule, UserModule]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    app = moduleRef.createNestApplication()
    await app.init()
    db = moduleRef.get<DatabaseService>(DatabaseService)
    userService = moduleRef.get<UserService>(UserService)
  })
  beforeEach(async () => {
    await db.user.deleteMany({})
    await db.tenant.deleteMany({})
  })

  describe('GET /users', () => {
    it('suscefully', async () => {
      await userService.create({
        externalId: '1',
        firstName: 'James',
        lastName: 'Henry',
        email: 'james@gmail.com'
      })

      await userService.create({
        externalId: '2',
        firstName: 'Honda',
        lastName: 'Pedroza',
        email: 'honda@gmail.com'
      })

      const { ok, body } = await supertest(app.getHttpServer()).get(PATH)

      expect(ok).toBeTruthy()
      expect(body.length).toBe(2)
    })
  })
  describe('POST /users', () => {
    it('sucefully', async () => {
      const { ok, body } = await await supertest(app.getHttpServer())
        .post(PATH)
        .send({
          externalId: '1',
          firstName: 'Henry',
          lastName: 'James',
          email: 'henry@gmail.com'
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
      expect(ok).toBeTruthy()
      expect(body['firstName']).toEqual('Henry')
    })
  })
})
