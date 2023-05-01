import { Test, TestingModule } from '@nestjs/testing'
import { AccountModule } from '@server/account'
import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { TenantModule } from '@server/tenant'
import { UserModule } from '@server/user'
import { ClientModule } from '../lib/client.module'
import { ClientService } from '../lib/client.service'
import { CreateClientDto } from '../lib/dto/client.create.dto'

describe('BookingProduct Service', () => {
  let moduleRef: TestingModule
  let db: DatabaseService
  let clientService: ClientService

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        CoreModule,
        DatabaseModule,
        TenantModule,
        ClientModule,
        AccountModule,
        UserModule
      ]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    clientService = moduleRef.get<ClientService>(ClientService)
    db = moduleRef.get<DatabaseService>(DatabaseService)
  })

  beforeEach(async () => {
    await db.client.deleteMany({})
    await db.account.deleteMany({})
    await db.tenant.deleteMany({})
  })

  afterAll(() => {
    moduleRef.close()
  })

  describe('findMany', () => {
    it('should return all clients objects', async () => {
      const tenant = await db.tenant.create({
        data: { name: 'tenant1', email: 'tenant1@gmail.com' }
      })

      const account = await db.account.create({
        data: {
          tenantId: tenant.id,
          name: 'account1',
          email: 'account1@gmail.com',
          ownerId: 1,
          category: 'Agency'
        }
      })

      await db.client.create({
        data: {
          accountId: account.id,
          tenantId: tenant.id,
          firstName: 'henry',
          lastName: 'james',
          email: 'henry@gmail.com',
          dateOfBirth: new Date(Date.now()),
          ownerUserId: '1'
        }
      })

      await db.client.create({
        data: {
          accountId: account.id,
          tenantId: tenant.id,
          firstName: 'pedro',
          lastName: 'julio',
          email: 'pedro@gmail.com',
          dateOfBirth: new Date(Date.now()),
          ownerUserId: '1'
        }
      })

      const clients = await clientService.findAll()
      expect(clients.length).toEqual(2)
    })
  })

  describe('create', () => {
    it('should create a client', async () => {
      const tenant = await db.tenant.create({
        data: { name: 'tenant1', email: '' }
      })
      const account = await db.account.create({
        data: {
          tenantId: tenant.id,
          name: 'account1',
          email: 'account1@gmail.com',
          ownerId: 1,
          category: 'Agency'
        }
      })
      const createClient: CreateClientDto = {
        accountId: account.id,
        tenantId: tenant.id,
        firstName: 'pedro',
        lastName: 'julio',
        email: 'pedro@gmail.com',
        dateOfBirth: new Date(Date.now()),
        ownerUserId: '1'
      }

      const client = await clientService.create(createClient)
      expect(client.firstName).toBe('pedro')
    })
  })
})
