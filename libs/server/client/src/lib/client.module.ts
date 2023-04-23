import { Module } from '@nestjs/common'
import { ClientController } from './client.controllers'
import { ClientService } from './client.service'

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService]
})
export class ClientModule {}
