import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Query
} from '@nestjs/common'
import { Booking } from '@prisma/client'
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
    const parsedPage = page ? parseInt(page, 10) : 1
    const parsedSize = size ? parseInt(size, 10) : 10
    const { bookings, totalPages } = await this.service.findMany(
      parsedStartDate,
      parsedEndDate,
      parsedPage,
      parsedSize
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
  async update(@Param('id') id: string, @Body() input: UpdateBookingDto) {
    try {
      return await this.service.update(Number(id), input)
    } catch (error: any) {
      throw new HttpException(
        error.message,
        error.status || HttpStatus.BAD_REQUEST
      )
    }
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
