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
    const users = await this.db.user.findMany({
      select: {
        id: true,
        tenantId: true,
        firstName: true
      }
    })

    const user = users.length > 0 ? users[0] : null

    if (user === null) {
      throw new Error('Nenhum registro encontrado')
    }

    const account = await this.db.account.create({
      data: {
        tenantId: input.tenantId,
        name: input.name,
        email: input.email,
        category: input.category,
        ownerId: user.id,
        createdBy: user.firstName,
        modifiedBy: user.firstName
      }
    })
    return account
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
