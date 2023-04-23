import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  NotFoundException,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { BookingProductService } from './bookingproducts.service'
import { CreateBookingProductDto } from './dto/bookingproduct.create.dto'
import { UpdateBookingProductDto } from './dto/bookingproduct.update.dto'
@Controller('bookingproducts')
export class BookingProductControllers {
  constructor(private readonly service: BookingProductService) {}

  @Get('booking/:bookingId')
  async index(@Param('bookingId') bookingId?: string) {
    try {
      return this.service.findMany(Number(bookingId))
    } catch (error: any) {
      throw new HttpException(error.message, error.status)
    }
  }

  @Post()
  async createMany(@Body('data') data: CreateBookingProductDto[]) {
    return await this.service.createMany(data)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.service.find(Number(id))
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }

  @Patch()
  async update(
    @Body()
    data: UpdateBookingProductDto[]
  ) {
    try {
      return await this.service.update(data)
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.service.destroy(Number(id))
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }
}
