import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { Prisma } from '@prisma/client'
import { CoreModule } from '@server/core'
import { DatabaseModule, DatabaseService } from '@server/database'
import * as request from 'supertest'
import { TenantModule } from './tenant.module'
;(BigInt.prototype as any).toJSON = function () {
  return this.toString()
}

describe('Tenants', () => {
  let app: INestApplication
  let db: DatabaseService
  let moduleRef: TestingModule

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [CoreModule, DatabaseModule, TenantModule]
    }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
    db = moduleRef.get<DatabaseService>(DatabaseService)
  })

  afterAll(async () => {
    await moduleRef.close()
  })

  beforeEach(async () => {
    await db.account.deleteMany({})
    await db.tenant.deleteMany({})
  })

  it('GET tenants', async () => {
    const tenantCreateManyArgs: Prisma.TenantCreateManyArgs = {
      data: [
        {
          name: 'Tenant 1',
          email: 'tenant1@gmail.com'
        },
        {
          name: 'Tenant 2',
          email: 'tenant2@gmail.com'
        }
      ]
    }

    await db.tenant.createMany(tenantCreateManyArgs)

    const { ok, body } = await request(app.getHttpServer()).get('/tenants')

    expect(ok).toBeTruthy()
    expect(body[0]['name']).toEqual('Tenant 1')
    expect(body[0]['email']).toEqual('tenant1@gmail.com')

    expect(body[1]['name']).toEqual('Tenant 2')
    expect(body[1]['email']).toEqual('tenant2@gmail.com')

    expect(body.length).toBe(2)
  })

  it('/POST tenants', async () => {
    await request(app.getHttpServer())
      .post('/tenants')
      .send({
        data: {
          name: 'tenant1',
          email: 'tenant1@gmail.com'
        }
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
  })

  it('/PACTH tenants', async () => {
    const createTenantArgs: Prisma.TenantCreateArgs = {
      data: {
        name: 'Tenant1',
        email: 'tenant1@gmail.com'
      }
    }

    const { id } = await db.tenant.create(createTenantArgs)

    const { body, ok } = await request(app.getHttpServer())
      .patch('/tenants/' + id)
      .send({
        data: {
          name: 'tenant2',
          email: 'tenant2@gmail.com'
        }
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)

    expect(body['id']).toBeDefined()
    expect(body['email']).toBe('tenant2@gmail.com')
    expect(ok).toBeTruthy()
  })
})
