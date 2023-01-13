import { Test, TestingModule } from '@nestjs/testing';
import { Prisma } from '@prisma/client';
import { CoreModule } from '@server/core';
import { DatabaseModule, DatabaseService } from '@server/database';
import { TenantModule } from './tenant.module';
import { TenantService } from './tenant.service';

describe('Tenant Service', () => {
  let tenantService: TenantService;
  let db: DatabaseService;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [CoreModule, DatabaseModule, TenantModule],
    }).compile();

    tenantService = moduleRef.get<TenantService>(TenantService);
    db = moduleRef.get<DatabaseService>(DatabaseService);
  });

  beforeEach(async () => {
    await db.tenant.deleteMany({});
  });

  afterEach(async () => {
    await db.$disconnect();
  });

  describe('create', () => {
    it('should save and return a tenant object', async () => {
      const input: Prisma.TenantCreateArgs = {
        data: {
          name: 'Tenant 1',
          email: 'tenant1@gmail.com',
        },
      };

      const tenant = await tenantService.create(input);

      expect(tenant.email).toBe('tenant1@gmail.com');
    });
  });
});
