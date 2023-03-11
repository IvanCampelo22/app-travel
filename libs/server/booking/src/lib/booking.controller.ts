import { Body, Controller, Get, Param, Patch } from '@nestjs/common'
import { BookingService } from './booking.service'
import { UpdateBookingDto } from './dto/booking.update.dto'

@Controller('bookings')
export class BookingController {
  constructor(private readonly service: BookingService) {}

  @Get('new')
  async new() {
    return this.service.new()
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() input: UpdateBookingDto) {
    return this.service.update(Number(id), input)
  }
}
