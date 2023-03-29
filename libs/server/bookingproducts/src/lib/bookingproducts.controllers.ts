import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
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

  @Get()
  async index() {
    return this.service.findMany()
  }

  @Post()
  async post(@Body() input: CreateBookingProductDto) {
    console.log(input)
    try {
      return await this.service.create(input)
    } catch (error) {
      throw new BadRequestException('Bad Request')
    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.service.find(Number(id))
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: UpdateBookingProductDto) {
    try {
      return await this.service.update(Number(id), data)
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
