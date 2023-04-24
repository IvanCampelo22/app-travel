import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { ClientController } from './client.controllers'
import { ClientService } from './client.service'

@Module({
  imports: [UserModule],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService]
})
export class ClientModule {}
