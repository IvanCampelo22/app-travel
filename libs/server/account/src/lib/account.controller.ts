import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  NotFoundException,
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

  @Get(':id')
  async findUnique(@Param('id') id: string) {
    try {
      return await this.service.findOne(Number(id))
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }

  @Post()
  async create(@Body() input: CreateAccountDto) {
    try {
      return await this.service.create(input)
    } catch (error: any) {
      throw new HttpException(error.message, error.status)
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateAccountDto) {
    try {
      return await this.service.update(Number(id), data)
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.service.destroy(Number(id))
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }
}
