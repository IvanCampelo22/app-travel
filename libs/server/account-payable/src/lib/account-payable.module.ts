import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { AccountPayableController } from './account-payable.controllers'
import { AccountPayableService } from './account-payable.service'

@Module({
  imports: [UserModule],
  controllers: [AccountPayableController],
  providers: [AccountPayableService],
  exports: [AccountPayableService]
})
export class AccountPayableModule {}
