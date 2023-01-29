import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { TenantService } from './tenant.service'
;(BigInt.prototype as any).toJSON = function () {
  return this.toString()
}

@Controller('tenants')
export class TenantController {
  constructor(private readonly service: TenantService) {}

  @Post()
  async create(@Body() input: Prisma.TenantCreateArgs) {
    return this.service.create(input)
  }

  @Get()
  async findMany() {
    return this.service.findMany()
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body('data') data: Prisma.TenantUpdateArgs
  ) {
    return this.service.update({
      data,
      where: { id: Number(id) }
    })
  }

  @Delete(':id')
  async remove(@Param('id') id: string, isActive: false) {
    return this.service.deactivate(Number(id), isActive)
  }
}
