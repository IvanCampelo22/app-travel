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
  async findOne(@Param('id') id: string) {
    return await this.contactService.findOne(Number(id))
  }

  @Post()
  async create(@Body() input: CreateContactDto) {
    return await this.contactService.create(input)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateContactDto) {
    return await this.contactService.update(Number(id), input)
  }

  @Delete(':id')
  async destroy(@Param('id') id: string) {
    return await this.contactService.destroy(Number(id))
  }
}
