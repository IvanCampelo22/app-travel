import { Body, Controller, Post } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { TenantService } from './tenant.service'

@Controller('tenants')
export class TenantController {
  constructor(private readonly service: TenantService) {}

  @Post()
  async create(@Body() input: Prisma.TenantCreateArgs) {
    return await this.service.create(input)
  }
}
