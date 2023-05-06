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
  async findOne(@Param('id') id: number) {
    return this.contacttype.findOne(id)
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() input: UpdateContacttypeDto) {
    return this.contacttype.update(id, input)
  }

  @Delete(':id')
  async destroy(@Param('id') id: number) {
    return this.contacttype.destroy(id)
  }
}
