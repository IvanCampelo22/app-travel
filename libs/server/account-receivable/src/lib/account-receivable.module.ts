import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { AccountReceivableController } from './account-receivable.controllers'
import { AccountReceivableService } from './account-receivable.service'

@Module({
  imports: [UserModule],
  controllers: [AccountReceivableController],
  providers: [AccountReceivableService],
  exports: [AccountReceivableService]
})
export class AccountReceivableModule {}
