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
import { ProductModule } from '../lib/product.module'
import { ProductService } from '../lib/product.service'

describe('BookingProduct Service', () => {
  let moduleRef: TestingModule
  let db: DatabaseService
  let productService: ProductService

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [
        CoreModule,
        DatabaseModule,
        TenantModule,
        ProductModule,
        AccountModule,
        UserModule
      ]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    productService = moduleRef.get<ProductService>(ProductService)
    db = moduleRef.get<DatabaseService>(DatabaseService)
  })

  beforeEach(async () => {
    await db.account.deleteMany({})
    await db.tenant.deleteMany({})
    await db.product.deleteMany({})
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

      await db.product.create({
        data: {
          accountId: account.id,
          tenantId: tenant.id
        }
      })

      await db.product.create({
        data: {
          accountId: account.id,
          tenantId: tenant.id
        }
      })

      const products = await productService.findAll()
      expect(products.length).toEqual(2)
    })
  })
})
