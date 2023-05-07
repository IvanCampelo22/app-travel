import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'
import { CreateAccountTypeDto } from './dto/accounttype.create.dto'
import { UpdateAccountTypeDto } from './dto/accounttype.update.dto'

@Injectable()
export class AccounttypeService {
  constructor(
    private readonly db: DatabaseService,
    private readonly userService: UserService
  ) {}

  async findAll() {
    return await this.db.accountType.findMany()
  }

  async findOne(id: number) {
    return await this.db.accountType.findUnique({ where: { id } })
  }

  async create(input: CreateAccountTypeDto) {
    return await this.db.accountType.create({ data: { ...input } })
  }

  async update(id: number, input: UpdateAccountTypeDto) {
    return await this.db.accountType.update({
      where: { id },
      data: { ...input }
    })
  }

  async destroy(id: number) {
    const accountType = await this.db.accountType.update({
      where: { id },
      data: { isActive: false }
    })

    await this.userService.destroy(accountType.id)

    return accountType
  }
}
