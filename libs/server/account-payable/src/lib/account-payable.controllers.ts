import { Controller, Get } from '@nestjs/common'
import { AccountPayableService } from './account-payable.service'

@Controller('account-payables')
export class AccountPayableController {
  constructor(private readonly accountPayableService: AccountPayableService) {}

  @Get()
  async findAll() {
    return await this.accountPayableService.findAll()
  }
}
