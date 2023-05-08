import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { AccountModule } from '@server/account'
import { AccountPayableModule } from '@server/accountpayable'
import { AccountReceivableModule } from '@server/accountreceivable'
import { AccounttypeModule } from '@server/accounttype'
import { BookingModule } from '@server/booking'
import { BookingproductsModule } from '@server/bookingproducts'
import { ClientModule } from '@server/client'
import { ContactModule } from '@server/contact'
import { ContacttypeModule } from '@server/contacttype'
import { CoreModule } from '@server/core'
import { DatabaseModule } from '@server/database'
import { LeadModule } from '@server/lead'
import { ProductModule } from '@server/product'
import { TenantModule } from '@server/tenant'
import { UserModule } from '@server/user'

@Module({
  imports: [
    CoreModule,
    DatabaseModule,
    TenantModule,
    UserModule,
    AccountModule,
    BookingModule,
    BookingproductsModule,
    ProductModule,
    ClientModule,
    AccountReceivableModule,
    AccountPayableModule,
    LeadModule,
    ContacttypeModule,
    ContactModule,
    AccounttypeModule,
    MulterModule.register({
      dest: './files'
    })
  ]
})
export class MainModule {}
