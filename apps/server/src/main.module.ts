import { Module } from '@nestjs/common'
import { AccountModule } from '@server/account'
import { AccountPayableModule } from '@server/accountpayable'
import { AccountReceivableModule } from '@server/accountreceivable'
import { BookingModule } from '@server/booking'
import { BookingproductsModule } from '@server/bookingproducts'
import { ClientModule } from '@server/client'
import { CoreModule } from '@server/core'
import { DatabaseModule } from '@server/database'
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
    AccountPayableModule
  ]
})
export class MainModule {}
