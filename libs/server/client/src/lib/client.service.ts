import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'
import { CreateClientDto } from './dto/client.create.dto'
import { UpdateClientDto } from './dto/client.update.dto'

@Injectable()
export class ClientService {
  constructor(
    private readonly db: DatabaseService,
    private readonly user: UserService
  ) {}

  async findAll() {
    return await this.db.client.findMany()
  }

  async findOne(id: number) {
    return await this.db.client.findUnique({ where: { id } })
  }

  async create(input: CreateClientDto) {
    return await this.db.client.create({ data: { ...input } })
  }

  async update(id: number, input: UpdateClientDto) {
    return await this.db.client.update({ where: { id }, data: { ...input } })
  }

  async destroy(id: number) {
    const client = await this.db.client.update({
      where: { id },
      data: { isActive: false }
    })

    await this.user.destroy(client.id)

    return client
  }
}
