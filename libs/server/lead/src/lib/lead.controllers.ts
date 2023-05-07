import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { CreateLeadDto } from '../lib/dto/lead.create.dto'
import { UpdateLeadDto } from '../lib/dto/lead.update.dto'
import { LeadService } from '../lib/lead.service'

@Controller('leads')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}
  @Get()
  async findMany() {
    return this.leadService.findMany()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.leadService.findOne(Number(id))
  }

  @Post()
  async create(@Body() input: CreateLeadDto) {
    return this.leadService.create(input)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateLeadDto) {
    return this.leadService.update(Number(id), input)
  }

  @Delete(':id')
  async destroy(@Param('id') id: string) {
    return this.leadService.destroy(Number(id))
  }
}
