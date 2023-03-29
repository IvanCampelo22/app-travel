import { Module } from '@nestjs/common'
import { BookingProductControllers } from './bookingproducts.controllers'
import { BookingProductService } from './bookingproducts.service'

@Module({
  controllers: [BookingProductControllers],
  providers: [BookingProductService],
  exports: [BookingProductService]
})
export class BookingproductsModule {}
