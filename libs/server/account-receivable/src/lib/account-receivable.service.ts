import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'
import { CreateAccountReceivableDto } from './dto/account-receivable.create.dto'
import { UpdateAccountReceivableDto } from './dto/account-receivable.update.dto'

@Injectable()
export class AccountReceivableService {
  constructor(
    private readonly db: DatabaseService,
    private readonly user: UserService
  ) {}

  async findAll() {
    return await this.db.accountReceivable.findMany()
  }

  async findOne(id: number) {
    return await this.db.accountReceivable.findUnique({
      where: { id }
    })
  }

  async create(input: CreateAccountReceivableDto) {
    return await this.db.accountReceivable.create({
      data: input
    })
  }

  async update(id: number, input: UpdateAccountReceivableDto) {
    return await this.db.accountReceivable.update({
      where: { id },
      data: input
    })
  }

  async destroy(id: number) {
    const receivable = await this.db.accountPayable.update({
      where: { id },
      data: { isActive: false }
    })
    await this.user.destroy(id)
    return receivable
  }
}
