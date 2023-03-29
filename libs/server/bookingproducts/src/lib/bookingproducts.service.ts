import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'
import { CreateBookingProductDto } from './dto/bookingproduct.create.dto'
import { UpdateBookingProductDto } from './dto/bookingproduct.update.dto'

@Injectable()
export class BookingProductService {
  constructor(
    private readonly service: DatabaseService,
    private readonly userService: UserService
  ) {}

  async findMany() {
    return this.service.bookingProduct.findMany()
  }

  async create(input: CreateBookingProductDto) {
    return this.service.bookingProduct.create({ data: { ...input } })
  }

  async find(id: number) {
    return this.service.bookingProduct.findUnique({ where: { id } })
  }

  async update(id: number, input: UpdateBookingProductDto) {
    return this.service.bookingProduct.update({ where: { id }, data: input })
  }

  async destroy(id: number) {
    const bookingproduct = await this.service.bookingProduct.update({
      where: { id },
      data: { isActive: false }
    })

    await this.userService.destroy(bookingproduct.id)

    return bookingproduct
  }
}
