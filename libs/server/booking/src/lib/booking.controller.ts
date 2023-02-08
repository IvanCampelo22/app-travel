import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch
} from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { BookingService } from './booking.service'

@Controller('bookings')
export class BookingController {
  constructor(private readonly service: BookingService) {}

  @Get('new')
  async new() {
    return this.service.new()
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() input: Prisma.BookingUpdateArgs
  ) {
    try {
      this.service.update({ ...input, where: { id: Number(id) } })
    } catch (error) {
      throw new NotFoundException('Booking not found')
    }
  }
}
