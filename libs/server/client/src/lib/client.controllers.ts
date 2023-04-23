import { Controller, Get } from '@nestjs/common'
import { ClientService } from './client.service'

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAll() {
    return await this.clientService.findAll()
  }
}
