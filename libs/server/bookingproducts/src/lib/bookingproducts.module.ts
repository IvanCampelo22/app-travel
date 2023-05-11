import { Module } from '@nestjs/common'
import { AwsModule } from '@server/aws'
import { UserModule } from '@server/user'
import { BookingProductControllers } from './bookingproducts.controllers'
import { BookingProductService } from './bookingproducts.service'

@Module({
  imports: [UserModule, AwsModule],
  controllers: [BookingProductControllers],
  providers: [BookingProductService],
  exports: [BookingProductService]
})
export class BookingproductsModule {}
