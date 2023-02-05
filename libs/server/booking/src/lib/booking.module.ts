import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { BookingController } from './booking.controller'
import { BookingService } from './booking.service'

@Module({
  imports: [UserModule],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService]
})
export class BookingModule {}
