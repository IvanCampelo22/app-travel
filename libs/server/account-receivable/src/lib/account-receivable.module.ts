import { Module } from '@nestjs/common'
import { AccountReceivableController } from './account-receivable.controllers'
import { AccountReceivableService } from './account-receivable.service'

@Module({
  controllers: [AccountReceivableController],
  providers: [AccountReceivableService],
  exports: [AccountReceivableService]
})
export class AccountReceivableModule {}
