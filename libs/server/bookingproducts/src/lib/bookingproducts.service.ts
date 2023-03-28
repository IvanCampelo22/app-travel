import { BadRequestException, Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { CreateBookingProductDto } from './dto/bookingproduct.create.dto'

@Injectable()
export class BookingProductService {
  constructor(private readonly service: DatabaseService) {}

  async findMany() {
    return this.service.bookingProduct.findMany()
  }

  async create(input: CreateBookingProductDto) {
    try {
      return this.service.bookingProduct.create({ data: { ...input } })
    } catch (error) {
      throw new BadRequestException('Bad Request')
    }
  }
}
