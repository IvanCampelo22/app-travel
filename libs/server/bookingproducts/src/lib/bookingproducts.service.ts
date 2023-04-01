import { Injectable } from '@nestjs/common'
import { BookingProduct } from '@prisma/client'
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

  async findMany(bookingId?: number): Promise<BookingProduct[]> {
    return await this.service.bookingProduct.findMany({ where: { bookingId } })
  }

  async createMany(data: CreateBookingProductDto[]) {
    return this.service.bookingProduct.createMany({
      data
    })
  }

  async find(id: number) {
    return await this.service.bookingProduct.findUnique({ where: { id } })
  }

  async update(input: UpdateBookingProductDto[]): Promise<BookingProduct[]> {
    const updateManyPromises = input.map((dto) => {
      return this.service.bookingProduct.updateMany({
        where: { id: dto.id },
        data: dto
      })
    })

    await Promise.all(updateManyPromises)

    const updatedObjects = await this.service.bookingProduct.findMany({
      where: {
        id: {
          in: input.map((dto) => dto.id)
        }
      }
    })

    return updatedObjects
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
