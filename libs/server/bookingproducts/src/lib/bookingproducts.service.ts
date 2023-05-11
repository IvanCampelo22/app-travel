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
    const users = await this.service.user.findMany({
      select: {
        id: true,
        tenantId: true,
        firstName: true
      }
    })

    const user = users.length > 0 ? users[0] : null

    if (user === null) {
      throw new Error('Nenhum registro encontrado')
    }

    const bookings: BookingProduct[] = []

    for (let i = 0; i < data.length; i++) {
      const bookingproducts = await this.service.bookingProduct.create({
        data: {
          tenantId: data[i].tenantId,
          bookingId: data[i].bookingId,
          accountId: data[i].accountId,
          supplierId: data[i].supplierId,
          supplierName: data[i].supplierName,
          ownerId: user.id,
          category: data[i].category,
          description: data[i].description,
          startDate: data[i].startDate,
          endDate: data[i].endDate,
          adultsCount: data[i].adultsCount,
          minorsCount: data[i].minorsCount,
          ageOfMinors: data[i].ageOfMinors,
          toLocation: data[i].toLocation,
          fromLocation: data[i].fromLocation,
          termsAndConditions: data[i].termsAndConditions,
          locatorCode: data[i].locatorCode,
          productCost: data[i].productCost,
          hotelName: data[i].hotelName,
          modifiedBy: user.firstName,
          createdBy: user.firstName
        }
      })
      bookings.push(bookingproducts)
    }
    return bookings
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
