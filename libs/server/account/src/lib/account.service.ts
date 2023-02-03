import { AccountCreateArgsSchema } from '@common/validation'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'

@Injectable()
export class AccountService {
  constructor(
    private readonly db: DatabaseService,
    private readonly userService: UserService
  ) {}

  async create(input: Prisma.AccountCreateArgs) {
    AccountCreateArgsSchema.parse(input)
    return this.db.account.create({ ...input })
  }

  async findMany() {
    return this.db.account.findMany()
  }

  async update(input: Prisma.AccountUpdateArgs) {
    return this.db.account.update(input)
  }

  async destroy(id: number) {
    const account = await this.db.account.update({
      where: { id },
      data: { isActive: false }
    })
    await this.userService.destroy(id)
    return account
  }
}
