import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { LeadController } from './lead.controllers'
import { LeadService } from './lead.service'

@Module({
  imports: [UserModule],
  controllers: [LeadController],
  providers: [LeadService],
  exports: [LeadService]
})
export class LeadModule {}
