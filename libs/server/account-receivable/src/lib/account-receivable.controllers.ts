import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { AccountReceivableService } from './account-receivable.service'
import { CreateAccountReceivableDto } from './dto/account-receivable.create.dto'

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
  async findOne(@Param(':id') id: string) {
    return await this.accountReceivableService.findOne(Number(id))
  }

  @Post()
  async create(@Body() input: CreateAccountReceivableDto) {
    return await this.accountReceivableService.create(input)
  }

  @Patch(':id')
  async update(
    @Param(':id') id: string,
    @Body() input: CreateAccountReceivableDto
  ) {
    return await this.accountReceivableService.update(Number(id), input)
  }

  @Delete(':id')
  async destroy(@Param(':id') id: string) {
    return await this.accountReceivableService.destroy(Number(id))
  }
}
