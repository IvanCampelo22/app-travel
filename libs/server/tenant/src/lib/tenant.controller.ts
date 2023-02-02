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
import { Prisma } from '@prisma/client'
import { ZodError } from 'zod'
import { TenantService } from './tenant.service'

@Controller('tenants')
export class TenantController {
  constructor(private readonly service: TenantService) {}

  @Get()
  async index() {
    return this.service.findMany()
  }

  @Post()
  async create(@Body() data: Prisma.TenantCreateArgs) {
    try {
      return await this.service.create(data)
    } catch (error) {
      const { issues } = error as ZodError
      throw new BadRequestException(issues, 'Validation Failed')
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: Prisma.TenantUpdateArgs) {
    try {
      return await this.service.update({
        ...data,
        where: { id: Number(id) }
      })
    } catch (error) {
      throw new NotFoundException()
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.service.destroy(Number(id))
    } catch (error) {
      throw new NotFoundException()
    }
  }
}
