import { Injectable } from '@nestjs/common'
import { ContactType } from '@prisma/client'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'
import { CreateContacttypeDto } from './dto/contacttype.create.dto'
import { UpdateContacttypeDto } from './dto/contacttype.update.dto'

@Injectable()
export class ContacttypeService {
  constructor(
    private readonly db: DatabaseService,
    private readonly userService: UserService
  ) {}

  async findAll(): Promise<ContactType[]> {
    return await this.db.contactType.findMany()
  }

  async create(input: CreateContacttypeDto): Promise<ContactType> {
    return await this.db.contactType.create({ data: { ...input } })
  }

  async findOne(id: number) {
    return await this.db.contactType.findUnique({ where: { id } })
  }

  async update(id: number, input: UpdateContacttypeDto) {
    return await this.db.contactType.update({
      where: { id },
      data: { ...input }
    })
  }

  async destroy(id: number) {
    const contactType = await this.db.contactType.update({
      where: { id },
      data: { isActive: false }
    })

    await this.userService.destroy(contactType.id)

    return contactType
  }
}
