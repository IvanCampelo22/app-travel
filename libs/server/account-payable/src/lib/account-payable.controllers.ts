import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
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
  async find(@Param(':id') id: string) {
    return await this.accountPayableService.find(Number(id))
  }

  @Post()
  async create(@Body() input: CreateAccountPayableDto) {
    return await this.accountPayableService.create(input)
  }

  @Patch(':id')
  async update(
    @Param(':id') id: number,
    @Body() input: UpdateAccountPayableDto
  ) {
    return await this.accountPayableService.update(id, input)
  }

  @Delete()
  async destroy(@Param(':id') id: number) {
    return await this.accountPayableService.destroy(id)
  }
}
