import { TenantCreateArgsSchema } from '@common/schemas'
import { BadRequestException, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { DatabaseService } from '@server/database'
import { ZodError } from 'zod'

@Injectable()
export class TenantService {
  constructor(private readonly db: DatabaseService) {}

  async create(input: Prisma.TenantCreateArgs) {
    try {
      TenantCreateArgsSchema.parse(input)
    } catch (error) {
      const { issues } = error as ZodError
      throw new BadRequestException(issues, 'Validation Failed')
    }

    return this.db.tenant.create({ ...input })
  }

  async findMany() {
    return await this.db.tenant.findMany()
  }

  async update(params: Prisma.TenantUpdateArgs) {
    return await this.db.tenant.update({
      ...params
    })
  }
  async deactivate(id: bigint, isActive: false) {
    return await this.db.tenant.update({
      where: { id },
      data: {
        isActive
      }
    })
  }
}
