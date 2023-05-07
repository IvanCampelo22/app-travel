import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { AccounttypeService } from './accounttype.service'
import { CreateAccountTypeDto } from './dto/accounttype.create.dto'
import { UpdateAccountTypeDto } from './dto/accounttype.update.dto'

@Controller('accounttypes')
export class AccounttypeController {
  constructor(private readonly accounttypeService: AccounttypeService) {}

  @Get()
  findAll() {
    return this.accounttypeService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accounttypeService.findOne(+id)
  }

  @Post()
  create(@Body() input: CreateAccountTypeDto) {
    return this.accounttypeService.create(input)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateAccountTypeDto) {
    return this.accounttypeService.update(Number(id), input)
  }

  @Delete(':id')
  destroy(@Param('id') id: string) {
    return this.accounttypeService.destroy(Number(id))
  }
}
