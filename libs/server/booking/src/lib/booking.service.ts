import { Injectable } from '@nestjs/common'
import { CreateBookingProductDto } from '@server/bookingproducts'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'
import { UpdateBookingDto } from './dto/booking.update.dto'

@Injectable()
export class BookingService {
  constructor(
    private readonly db: DatabaseService,
    private readonly userService: UserService
  ) {}

  async new() {
    const account = (
      await this.db.account.findMany({
        select: {
          id: true,
          tenantId: true,
          accountUsers: { select: { id: true } }
        }
      })
    )[0]

    const booking = this.db.booking.create({
      data: {
        tenantId: account.tenantId,
        accountId: account.id,
        products: { createMany: { data: [] } }
      }
    })
    return booking
  }

  async find(id: number) {
    return this.db.booking.findFirst({ where: { id } })
  }

  async getTotalPages(
    startDate: Date | null,
    endDate: Date | null,
    pageSize: number
  ): Promise<number> {
    const where: Record<string, any> = {}
    if (startDate) {
      where['createdAt'] = {
        gte: startDate
      }
    }
    if (endDate) {
      if (where['createdAt']) {
        where['createdAt']['lte'] = endDate
      } else {
        where['createdAt'] = {
          lte: endDate
        }
      }
    }
    const totalResults = await this.db.booking.count({ where })
    return Math.ceil(totalResults / pageSize)
  }

  async findMany(
    startDate: Date | null,
    endDate: Date | null,
    skip: number,
    take: number
  ) {
    const where: Record<string, any> = {}
    if (startDate) {
      where['createdAt'] = {
        gte: startDate
      }
    }
    if (endDate) {
      if (where['createdAt']) {
        where['createdAt']['lte'] = endDate
      } else {
        where['createdAt'] = {
          lte: endDate
        }
      }
    }
    const result = await this.db.booking.findMany({
      where,
      skip,
      take,
      include: { products: true }
    })
    const test = result.map((result) => {
      const product = result.products.map((room) => ({
        category: room.accountId,
        adultsCount: room.adultsCount,
        minorsCount: room.minorsCount,
        ageOfMinors: room.ageOfMinors
      }))

      return {
        ...result,
        product: product
      }
    })
    return test
  }

  async update(
    id: number,
    input: UpdateBookingDto,
    bookingProducts: CreateBookingProductDto[]
  ) {
    if (bookingProducts !== undefined) {
      const products = bookingProducts.map((product) => ({
        tenantId: product.tenantId,
        bookingId: product.bookingId,
        accountId: product.accountId,
        supplierId: product.supplierId,
        supplierName: product.supplierName,
        ownerId: product.ownerId,
        category: product.category,
        startDate: product.startDate,
        endDate: product.endDate,
        toLocation: product.toLocation,
        roomCategory: product.roomCategory,
        adultsCount: product.adultsCount,
        minorsCount: product.minorsCount,
        ageOfMinors: product.ageOfMinors
      }))
      await this.db.$transaction([
        this.db.booking.update({ where: { id }, data: { ...input } }),
        this.db.bookingProduct.createMany({ data: products })
      ])
    }
  }
  async destroy(id: number) {
    const booking = await this.db.booking.update({
      where: { id },
      data: { isActive: false }
    })

    await this.userService.destroy(booking.id)

    return booking
  }
}
