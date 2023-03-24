import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { CreateUserDto } from './dto/user.create.dto'
import { UpdateUserDto } from './dto/user.update.dto'
@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  async create(input: CreateUserDto) {
    return this.db.user.create({ data: { ...input } })
  }

  async findMany() {
    return this.db.user.findMany()
  }

  async find(id: number) {
    return this.db.user.findFirst({ where: { id } })
  }

  async update(id: number, input: UpdateUserDto) {
    return this.db.user.update({ where: { id }, data: input })
  }

  async getLoggedUser(externalId: string) {
    return this.db.user.findFirst({
      where: { externalId },
      include: { account: true }
    })
  }

  async destroy(id: number) {
    console.log(`destroy(${id}) called`)

    return this.db.user.updateMany({
      where: { OR: [{ tenantId: id }, { accountId: id }] },
      data: { isActive: false }
    })
  }
}
