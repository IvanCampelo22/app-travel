import { AccountCreateArgsSchema } from '@common/schemas'
import { BadRequestException, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { DatabaseService } from '@server/database'
import { ZodError } from 'zod'

@Injectable()
export class AccountService {
  constructor(private readonly db: DatabaseService) {}

  async create(input: Prisma.AccountCreateArgs) {
    try {
      AccountCreateArgsSchema.parse(input)
    } catch (error) {
      const { issues } = error as ZodError
      throw new BadRequestException(issues, 'Validation Failed')
    }

    return this.db.account.create({ ...input })
  }

  async findMany() {
    return await this.db.account.findMany()
  }

  async update(params: Prisma.AccountUpdateArgs) {
    return await this.db.account.update({
      ...params
    })
  }
  async deactivate(id: bigint, isActive: false) {
    return await this.db.account.update({
      where: { id },
      data: {
        isActive
      }
    })
  }
}
