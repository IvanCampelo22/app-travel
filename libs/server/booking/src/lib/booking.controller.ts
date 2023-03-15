import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch
} from '@nestjs/common'
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
  async index() {
    return await this.service.findMany()
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
      return this.service.update(Number(id), input)
    } catch (error) {
      throw new BadRequestException('Bad Request')
    }
  }

  @Delete(':id')
  async destroy(@Param('id') id: string) {
    try {
      return await this.service.destroy(Number(id))
    } catch (error) {
      throw new BadRequestException('Bad Request')
    }
  }
}
