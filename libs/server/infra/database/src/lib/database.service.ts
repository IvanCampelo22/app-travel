import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class DatabaseService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private logger = new Logger(DatabaseService.name)

  constructor(private readonly config: ConfigService) {
    const user = config.get<string>('database.user')
    const name = config.get<string>('database.name')
    const password = config.get<string>('database.password')
    const host = config.get<string>('database.host')
    const port = config.get<string>('database.port')

    const url = `postgresql://${user}:${password}@${host}:${port}/${name}`
    super({
      datasources: { db: { url } },
      log: [
        {
          emit: 'event',
          level: 'query'
        },
        {
          emit: 'event',
          level: 'error'
        }
      ]
    })
  }

  async onModuleInit(): Promise<void> {
    this.logger.log('onModuleInit')
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(this as any).$on('query', (e: any) => {
        if (this.config.get<string>('database.logging') === 'all') {
          if (e.query !== 'SELECT 1') {
            this.logger.log(
              `query: ${e.query}, params: ${e.params}, duration: ${e.duration}`
            )
          }
        }
        if (this.config.get<string>('database.logging') === 'long') {
          if (e.duration >= 5) {
            this.logger.warn(
              `query is slow: ${e.query}, params: ${e.params}, execution time: ${e.duration}`
            )
          }
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // ;(this as any).$on('error', (e: any) => {
      //   this.logger.error(`target: ${e.target}, message: ${e.message}`)
      // })
      await this.$connect()
      setInterval(
        () =>
          this.$queryRaw`SELECT 1`.catch((err) =>
            this.logger.error(err, err.stack)
          ),
        5 * 60000
      )
    } catch (err) {
      this.logger.error(err)
    }
  }

  async onModuleDestroy(): Promise<void> {
    this.logger.log('onModuleDestroy')
    await this.$disconnect()
  }
}
