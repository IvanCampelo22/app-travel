import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'

@Injectable()
export class BookingProductService {
  constructor(private readonly service: DatabaseService) {}

  async findMany() {
    return this.service.bookingProduct.findMany()
  }
}
