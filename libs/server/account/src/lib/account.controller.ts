import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { AccountService } from './account.service'

@Controller('accounts')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Post()
  async create(@Body() input: Prisma.AccountCreateArgs) {
    return this.service.create(input)
  }

  @Get()
  async findMany() {
    return this.service.findMany()
  }

  @Patch(':id')
  async update(@Param('id') id: number, params: Prisma.AccountUpdateArgs) {
    return this.service.update({ ...params, where: { id } })
  }

  @Patch(':id')
  async remove(id: bigint, isActive: false) {
    return this.service.deactivate(id, isActive)
  }
}
