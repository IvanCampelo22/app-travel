import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '@prisma/client'
import { execSync } from 'child_process'

import { v4 } from 'uuid'

@Injectable()
export class DatabaseTestService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private logger = new Logger(DatabaseTestService.name)

  constructor(private readonly config: ConfigService) {
    const schema = v4()
    super({
      datasources: {
        db: {
          url: `${config.get<string>('database.url')}?schema=?${schema}`
        }
      }
    })
    execSync('yarn db:push:schema', {
      env: {
        ...process.env,
        DATABASE_URL: `${this.config.get<string>(
          'database.url'
        )}?schema=?${schema}`
      }
    })
  }

  async onModuleInit(): Promise<void> {
    await this.$connect()
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect()
  }
}
