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
    it('should return all users objects', async () => {
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

  describe('create', () => {
    it('should save and return a user object', async () => {
      const createUser: CreateUserDto = {
        externalId: '1',
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email'
      }
      const user = await userService.create(createUser)
      expect(user.firstName).toBe('firstName')
    })
  })

  describe('find', () => {
    it('should return just one user object', async () => {
      const createUser: CreateUserDto = {
        externalId: '1',
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email'
      }
      const { id } = await userService.create(createUser)
      const user = await userService.find(id)
      expect(user?.firstName).toBe('firstName')
    })
  })

  describe('update', () => {
    it('should update a object user', async () => {
      const createUser: CreateUserDto = {
        externalId: '1',
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email'
      }
      const { id } = await userService.create(createUser)
      const user = await userService.update(id, { email: 'email2' })
      expect(user.email).toBe('email2')
    })
  })

  describe('destroy', () => {
    it('should be destroy a user object', async () => {
      const tenant = await db.tenant.create({
        data: { name: 'tenant', email: 'tenant1@gmail.com' }
      })
      await db.user.createMany({
        data: [
          {
            tenantId: tenant.id,
            externalId: '1',
            firstName: 'Paul',
            lastName: 'Jones',
            email: 'paul@gmail.com'
          },
          {
            tenantId: tenant.id,
            externalId: '2',
            firstName: 'Julie',
            lastName: 'Marta',
            email: 'julie@gmail.om'
          }
        ]
      })
      await userService.destroy(tenant.id)
      const users = (await userService.findMany())[0]
      expect(users.isActive).toBe(false)
    })
  })
})
