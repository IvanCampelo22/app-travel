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
    const user = config.get<string>('database.user')
    const name = config.get<string>('database.name')
    const password = config.get<string>('database.password')
    const host = config.get<string>('database.host')
    const port = config.get<string>('database.port')
    const url = `postgresql://${user}:${password}@${host}:${port}/${name}?schema=?${schema}`
    console.log(url)

    super({
      datasources: { db: { url } }
    })
    execSync('yarn db:push:schema', {
      env: {
        ...process.env,
        DATABASE_URL: url
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
