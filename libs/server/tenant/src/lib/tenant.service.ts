import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from '@server/database';

@Injectable()
export class TenantService {
  constructor(private readonly db: DatabaseService) {}

  async create(input: Prisma.TenantCreateArgs) {
    return this.db.tenant.create({ ...input });
  }
}
