import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { BookingService } from './booking.service'

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [BookingService],
  exports: [BookingService]
})
export class BookingModule {}
