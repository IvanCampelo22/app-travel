import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { TenantService } from './tenant.service'

@Controller('tenants')
export class TenantController {
  constructor(private readonly service: TenantService) {}

  @Post()
  async create(@Body() input: Prisma.TenantCreateArgs) {
    return await this.service.create(input)
  }

  @Get()
  async findMany() {
    return await this.service.findMany()
  }

  @Patch('id')
  async update(@Param('id') id: number, params: Prisma.TenantUpdateArgs) {
    return await this.service.update({ ...params, where: { id } })
  }

  @Patch(':id')
  async remove(id: bigint, isActive: false) {
    return await this.service.deactivate(id, isActive)
  }
}
