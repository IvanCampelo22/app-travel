import { Module } from '@nestjs/common'
import { BookingProductService } from './bookingproducts.service'

@Module({
  controllers: [],
  providers: [BookingProductService],
  exports: [BookingProductService]
})
export class BookingproductsModule {}
