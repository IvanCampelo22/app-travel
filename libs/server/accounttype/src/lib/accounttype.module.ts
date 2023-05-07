import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { AccounttypeController } from './accounttype.controllers'
import { AccounttypeService } from './accounttype.service'

@Module({
  imports: [UserModule],
  controllers: [AccounttypeController],
  providers: [AccounttypeService],
  exports: [AccounttypeService]
})
export class AccounttypeModule {}
