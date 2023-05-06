import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { ContacttypeController } from './contacttype.controllers'
import { ContacttypeService } from './contacttype.service'

@Module({
  imports: [UserModule],
  controllers: [ContacttypeController],
  providers: [ContacttypeService],
  exports: [ContacttypeService]
})
export class ContacttypeModule {}
