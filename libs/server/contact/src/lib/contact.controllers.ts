import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { ContactService } from './contact.service'
import { CreateContactDto } from './dto/contact.create.dto'
import { UpdateContactDto } from './dto/contact.update.dto'

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get()
  async findAll() {
    return await this.contactService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.contactService.findOne(id)
  }

  @Post()
  async create(@Body() input: CreateContactDto) {
    return await this.contactService.create(input)
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() input: UpdateContactDto) {
    return await this.contactService.update(id, input)
  }

  @Delete(':id')
  async destroy(@Param('id') id: number) {
    return await this.contactService.destroy(id)
  }
}
