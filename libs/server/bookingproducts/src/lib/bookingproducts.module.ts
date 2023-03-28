import { Module } from '@nestjs/common'
import { BookingProductService } from './bookingproducts.service'

@Module({
  controllers: [],
  providers: [BookingProductService],
  exports: []
})
export class BookingproductsModule {}
