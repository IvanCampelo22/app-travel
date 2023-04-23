import { Controller, Get } from '@nestjs/common'
import { AccountReceivableService } from './account-receivable.service'

@Controller('account-receivables')
export class AccountReceivableController {
  constructor(
    private readonly accountReceivableService: AccountReceivableService
  ) {}

  @Get()
  async findAll() {
    return await this.accountReceivableService.findAll()
  }
}
