import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { ContacttypeService } from './contacttype.service'
import { CreateContacttypeDto } from './dto/contacttype.create.dto'
import { UpdateContacttypeDto } from './dto/contacttype.update.dto'

@Controller('contacttypes')
export class ContacttypeController {
  constructor(private readonly contacttype: ContacttypeService) {}

  @Get()
  async findAll() {
    return this.contacttype.findAll()
  }

  @Post()
  async create(@Body() input: CreateContacttypeDto) {
    return this.contacttype.create(input)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.contacttype.findOne(Number(id))
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateContacttypeDto) {
    return this.contacttype.update(Number(id), input)
  }

  @Delete(':id')
  async destroy(@Param('id') id: string) {
    return this.contacttype.destroy(Number(id))
  }
}
