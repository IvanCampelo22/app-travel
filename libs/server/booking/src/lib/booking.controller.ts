import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Query
} from '@nestjs/common'
import { Booking } from '@prisma/client'
import { CreateBookingProductDto } from '@server/bookingproducts'
import { BookingService } from './booking.service'
import { UpdateBookingDto } from './dto/booking.update.dto'

@Controller('bookings')
export class BookingController {
  constructor(private readonly service: BookingService) {}

  @Get('new')
  async new() {
    return this.service.new()
  }

  @Get()
  async index(
    @Query('start_date') startDate?: string,
    @Query('end_date') endDate?: string,
    @Query('page') page?: string,
    @Query('size') size?: string
  ): Promise<{ bookings: Booking[]; totalPages: number }> {
    const parsedStartDate = startDate ? new Date(startDate) : null
    const parsedEndDate = endDate ? new Date(endDate) : null
    const skip = (parseInt(page || '1', 10) - 1) * parseInt(size || '10', 10)
    const take = parseInt(size || '10', 10)
    const totalPages = await this.service.getTotalPages(
      parsedStartDate,
      parsedEndDate,
      take
    )
    const bookings = await this.service.findMany(
      parsedStartDate,
      parsedEndDate,
      skip,
      take
    )
    return { bookings, totalPages }
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    try {
      return await this.service.find(Number(id))
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() input: UpdateBookingDto,
    @Body('bookingProducts') bookingProducts: CreateBookingProductDto[]
  ) {
    return await this.service.update(Number(id), input, bookingProducts)
  }

  @Delete(':id')
  async destroy(@Param('id') id: string) {
    try {
      return await this.service.destroy(Number(id))
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }
}
