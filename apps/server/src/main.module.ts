import { Module } from '@nestjs/common';
import { CoreModule } from '@server/core';
import { DatabaseModule } from '@server/database';
import { TenantModule } from '@server/tenant';

@Module({
  imports: [CoreModule, DatabaseModule, TenantModule],
})
export class MainModule {}
