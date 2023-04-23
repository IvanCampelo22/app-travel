import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { ClientService } from './client.service'
import { CreateClientDto } from './dto/client.create.dto'
import { UpdateClientDto } from './dto/client.update.dto'

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAll() {
    return await this.clientService.findAll()
  }

  @Get(':id')
  async findOne(@Param(':id') id: number) {
    return await this.clientService.findOne(id)
  }

  @Post()
  async create(@Body() input: CreateClientDto) {
    return await this.clientService.create(input)
  }

  @Patch(':id')
  async update(@Param(':id') id: number, @Body() input: UpdateClientDto) {
    return await this.clientService.update(id, input)
  }

  @Delete()
  async destroy(@Param(':id') id: number) {
    return await this.clientService.destroy(id)
  }
}
