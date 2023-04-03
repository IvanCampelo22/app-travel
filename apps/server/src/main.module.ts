import { Module } from '@nestjs/common'
import { AccountModule } from '@server/account'
import { BookingModule } from '@server/booking'
import { BookingproductsModule } from '@server/bookingproducts'
import { CoreModule } from '@server/core'
import { DatabaseModule } from '@server/database'
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
    BookingproductsModule
  ]
})
export class MainModule {}
