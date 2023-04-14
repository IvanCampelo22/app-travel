import { faker } from '@faker-js/faker'
import { ProductCategory } from '@prisma/client'
import { CreateBookingProductDto } from '../lib/dto/bookingproduct.create.dto'

const createManyBookingProduct = async (
  count: number
): Promise<CreateBookingProductDto[]> => {
  const bookingProducts: CreateBookingProductDto[] = []

  for (let i = 0; i < count; i++) {
    bookingProducts.push({
      id: faker.datatype.number(),
      tenantId: 1,
      bookingId: 41,
      accountId: 198,
      ownerId: 1,
      category: ProductCategory.Accommodation,
      startDate: faker.date.past(),
      endDate: faker.date.future(),
      toLocation: faker.address.city()
    })
  }
  return bookingProducts
}

export { createManyBookingProduct }
