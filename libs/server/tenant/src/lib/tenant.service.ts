import { TenantCreateArgsSchema } from '@common/validation'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'

@Injectable()
export class TenantService {
  constructor(
    private readonly db: DatabaseService,
    private readonly userService: UserService
  ) {}

  async create(input: Prisma.TenantCreateArgs) {
    TenantCreateArgsSchema.parse(input)
    return this.db.tenant.create(input)
  }

  async findMany() {
    return this.db.tenant.findMany()
  }

  async find(where: Prisma.TenantWhereInput) {
    return this.db.tenant.findFirst({ where })
  }

  async update(input: Prisma.TenantUpdateArgs) {
    return this.db.tenant.update(input)
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
