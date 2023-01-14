import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DatabaseConfig } from './configurations/database.config'

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
      cache: true,
      load: [DatabaseConfig]
    })
  ],
  providers: [],
  exports: []
})
export class CoreModule {}
