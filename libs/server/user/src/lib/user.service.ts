import { UserCreateArgsSchema } from '@common/validation'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { DatabaseService } from '@server/database'

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  async create(input: Prisma.UserCreateArgs) {
    UserCreateArgsSchema.parse(input)
    return this.db.user.create(input)
  }

  async findMany() {
    return this.db.user.findMany()
  }

  async find(where: Prisma.UserWhereInput) {
    return this.db.user.findFirst({ where })
  }

  async update(input: Prisma.UserUpdateArgs) {
    return this.db.user.update(input)
  }

  async destroy(id: number) {
    return this.db.user.updateMany({
      where: { OR: [{ tenantId: id }, { accountId: id }] },
      data: { isActive: false }
    })
  }
}
