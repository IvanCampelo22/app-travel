import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { CreateAccountReceivableDto } from '../dto/account-receivable.create.dto'
import { AccountReceivableService } from './account-receivable.service'

@Controller('account-receivables')
export class AccountReceivableController {
  constructor(
    private readonly accountReceivableService: AccountReceivableService
  ) {}

  @Get()
  async findAll() {
    return await this.accountReceivableService.findAll()
  }

  @Get(':id')
  async findOne(@Param(':id') id: number) {
    return await this.accountReceivableService.findOne(id)
  }

  @Post()
  async create(@Body() input: CreateAccountReceivableDto) {
    return await this.accountReceivableService.create(input)
  }

  @Patch(':id')
  async update(
    @Param(':id') id: number,
    @Body() input: CreateAccountReceivableDto
  ) {
    return await this.accountReceivableService.update(id, input)
  }

  @Delete(':id')
  async destroy(@Param(':id') id: number) {
    return await this.accountReceivableService.destroy(id)
  }
}
