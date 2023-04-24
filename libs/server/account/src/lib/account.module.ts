import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { AccountController } from './account.controller'
import { AccountService } from './account.service'

@Module({
  imports: [UserModule],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService]
})
export class AccountModule {}
