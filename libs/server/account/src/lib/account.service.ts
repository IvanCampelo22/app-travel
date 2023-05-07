import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'
import { CreateAccountDto } from './dto/account.create.dto'
import { UpdateAccountDto } from './dto/account.update.dto'

@Injectable()
export class AccountService {
  constructor(
    private readonly db: DatabaseService,
    private readonly userService: UserService
  ) {}

  async create(input: CreateAccountDto) {
    return await this.db.account.create({
      data: {
        ...input
      }
    })
  }
  async findMany() {
    return this.db.account.findMany()
  }

  async findOne(id: number) {
    return this.db.account.findUnique({ where: { id } })
  }

  async update(id: number, input: UpdateAccountDto) {
    return this.db.account.update({ where: { id }, data: input })
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
