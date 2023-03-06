import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { AccountService } from './account.service'
import { CreateAccountDto } from './dto/account.create.dto'
import { UpdateAccountDto } from './dto/account.update.dto'

@Controller('accounts')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Get()
  async index() {
    return this.service.findMany()
  }

  @Post()
  async create(@Body() input: CreateAccountDto) {
    return await this.service.create(input)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateAccountDto) {
    return await this.service.update(Number(id), data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.destroy(Number(id))
  }
}
