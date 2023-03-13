import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
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
    try {
      return await this.service.create(data)
    } catch (error) {
      throw new BadRequestException('Bad Request')
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateTenantDto) {
    try {
      return await this.service.update(Number(id), data)
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.service.destroy(Number(id))
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }
}
