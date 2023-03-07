import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { CreateTenantDto } from './dto/tenant.create.dto'
import { UpdateTenantDto } from './dto/tenant.update.dto'
import { TenantService } from './tenant.service'

@Controller('tenants')
export class TenantController {
  constructor(private readonly service: TenantService) {}

  @Get()
  async index() {
    return this.service.findMany()
  }

  @Post()
  async create(@Body() data: CreateTenantDto) {
    return await this.service.create(data)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTenantDto) {
    return await this.service.update(Number(id), data)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.destroy(Number(id))
  }
}
