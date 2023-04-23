import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { CreateAccountPayableDto } from './dto/account-payable.create.dto'
import { UpdateAccountPayableDto } from './dto/account-payable.update.dto'

@Injectable()
export class AccountPayableService {
  constructor(private readonly db: DatabaseService) {}

  async findAll() {
    return await this.db.client.findMany()
  }

  async find(id: number) {
    return await this.db.accountPayable.findUnique({ where: { id } })
  }

  async create(input: CreateAccountPayableDto) {
    return await this.db.accountPayable.create({
      data: { ...input }
    })
  }

  async update(id: number, input: UpdateAccountPayableDto) {
    return await this.db.accountPayable.update({
      where: { id },
      data: { ...input }
    })
  }
}
