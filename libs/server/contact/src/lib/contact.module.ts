import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { ContactController } from './contact.controllers'
import { ContactService } from './contact.service'

@Module({
  imports: [UserModule],
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService]
})
export class ContactModule {}
