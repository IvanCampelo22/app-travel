import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'
import { CreateLeadDto } from './dto/lead.create.dto'
import { UpdateLeadDto } from './dto/lead.update.dto'

@Injectable()
export class LeadService {
  constructor(
    private readonly db: DatabaseService,
    private readonly userService: UserService
  ) {}

  async findMany() {
    return this.db.lead.findMany()
  }

  async findOne(id: number) {
    return this.db.lead.findUnique({ where: { id } })
  }

  async create(input: CreateLeadDto) {
    return this.db.lead.create({
      data: { ...input }
    })
  }

  async update(id: number, input: UpdateLeadDto) {
    return this.db.lead.update({
      where: { id },
      data: { ...input }
    })
  }

  async destroy(id: number) {
    const lead = await this.db.tenant.update({
      where: { id },
      data: { isActive: false }
    })

    await this.userService.destroy(lead.id)

    return lead
  }
}
