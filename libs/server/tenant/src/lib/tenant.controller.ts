import { TenantCreateArgsSchema } from '@common/schemas';
import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ZodValidationPipe } from 'nestjs-zod';
import { TenantService } from './tenant.service';

@Controller('tenants')
export class TenantController {
  constructor(private readonly service: TenantService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(TenantCreateArgsSchema))
  async create(@Body() input: Prisma.TenantCreateArgs) {
    return await this.service.create(input);
  }
}
