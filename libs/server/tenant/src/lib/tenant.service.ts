import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'
import { CreateTenantDto } from './dto/tenant.create.dto'
import { UpdateTenantDto } from './dto/tenant.update.dto'

@Injectable()
export class TenantService {
  constructor(
    private readonly db: DatabaseService,
    private readonly userService: UserService
  ) {}

  async create(input: CreateTenantDto) {
    return this.db.tenant.create({ data: { ...input } })
  }

  async findMany() {
    return this.db.tenant.findMany()
  }

  async find(id: number) {
    return this.db.tenant.findFirst({ where: { id } })
  }

  async update(id: number, input: UpdateTenantDto) {
    return this.db.tenant.update({ where: { id }, data: { ...input } })
  }

  async destroy(id: number) {
    const tenant = await this.db.tenant.update({
      where: { id },
      data: { isActive: false }
    })

    await this.userService.destroy(tenant.id)

    return tenant
  }
}
