import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { ZodError } from 'zod'
import { AccountService } from './account.service'

@Controller('accounts')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Get()
  async index() {
    return this.service.findMany()
  }

  @Post()
  async create(@Body() input: Prisma.AccountCreateArgs) {
    try {
      return await this.service.create(input)
    } catch (error) {
      const { issues } = error as ZodError
      throw new BadRequestException(issues, 'Validation Failed')
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.AccountUpdateArgs
  ) {
    try {
      return await this.service.update({ ...data, where: { id: Number(id) } })
    } catch (error) {
      throw new NotFoundException()
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.service.destroy(Number(id))
    } catch (error) {
      throw new NotFoundException()
    }
  }
}
