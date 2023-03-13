import { Test, TestingModule } from '@nestjs/testing'
import { CoreModule } from '@server/core'
import {
  DatabaseModule,
  DatabaseService,
  DatabaseTestService
} from '@server/database'
import { CreateUserDto } from '../lib/dto/user.create.dto'
import { UserModule } from './../lib/user.module'
import { UserService } from './../lib/user.service'

describe('User Service', () => {
  let userService: UserService
  let moduleRef: TestingModule
  let db: DatabaseService

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [CoreModule, DatabaseModule, UserModule]
    })
      .overrideProvider(DatabaseService)
      .useClass(DatabaseTestService)
      .compile()

    userService = moduleRef.get<UserService>(UserService)
    db = moduleRef.get<DatabaseService>(DatabaseService)
  })
  beforeEach(async () => {
    await db.account.deleteMany({})
    await db.tenant.deleteMany({})
    await db.user.deleteMany({})
  })

  afterAll(() => {
    moduleRef.close()
  })

  describe('findMany', () => {
    it('should return all tenants objects', async () => {
      const createUser1: CreateUserDto = {
        externalId: '1',
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email'
      }

      const createUser2: CreateUserDto = {
        externalId: '2',
        firstName: 'firstName2',
        lastName: 'lastName2',
        email: 'email2'
      }

      await userService.create(createUser1)
      await userService.create(createUser2)

      const users = await userService.findMany()

      expect(users.length).toEqual(2)
    })
  })
})
