import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { BookingProductControllers } from './bookingproducts.controllers'
import { BookingProductService } from './bookingproducts.service'

@Module({
  imports: [UserModule],
  controllers: [BookingProductControllers],
  providers: [BookingProductService],
  exports: [BookingProductService]
})
export class BookingproductsModule {}
