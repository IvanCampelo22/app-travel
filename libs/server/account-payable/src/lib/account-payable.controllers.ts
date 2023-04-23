import { Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { AccountPayableService } from './account-payable.service'
import { CreateAccountPayableDto } from './dto/account-payable.create.dto'
import { UpdateAccountPayableDto } from './dto/account-payable.update.dto'

@Controller('account-payables')
export class AccountPayableController {
  constructor(private readonly accountPayableService: AccountPayableService) {}

  @Get()
  async findAll() {
    return await this.accountPayableService.findAll()
  }

  @Get(':id')
  async find(id: number) {
    return await this.accountPayableService.find(id)
  }

  @Post()
  async create(input: CreateAccountPayableDto) {
    return await this.accountPayableService.create(input)
  }

  @Patch(':id')
  async update(id: number, input: UpdateAccountPayableDto) {
    return await this.accountPayableService.update(id, input)
  }

  @Delete()
  async destroy(id: number) {
    return await this.accountPayableService.destroy(id)
  }
}
