import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'
import { CreateContactDto } from './dto/contact.create.dto'
import { UpdateContactDto } from './dto/contact.update.dto'

@Injectable()
export class ContactService {
  constructor(
    private readonly db: DatabaseService,
    private readonly userService: UserService
  ) {}

  async findAll() {
    return await this.db.contact.findMany()
  }

  async findOne(id: number) {
    return await this.db.contact.findUnique({ where: { id } })
  }

  async create(input: CreateContactDto) {
    return await this.db.contact.create({ data: { ...input } })
  }

  async update(id: number, input: UpdateContactDto) {
    return await this.db.contact.update({ where: { id }, data: { ...input } })
  }

  async destroy(id: number) {
    const contact = await this.db.contact.update({
      where: { id },
      data: { isActive: false }
    })

    await this.userService.destroy(contact.id)

    return contact
  }
}
