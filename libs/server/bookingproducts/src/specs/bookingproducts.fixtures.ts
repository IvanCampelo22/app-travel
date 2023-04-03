import { faker } from '@faker-js/faker'
import { Prisma } from '@prisma/client'

const createOneBookingProduct = (
  tenantId: number,
  bookingId: number,
  accountId: number,
  ownerId: number
): Prisma.BookingProductCreateManyArgs => {
  return {
    data: {
      tenantId,
      bookingId,
      accountId,
      ownerId,
      category: 'Accommodation',
      startDate: new Date(Date.now()),
      endDate: new Date(Date.now()),
      toLocation: faker.address.city()
    }
  }
}

export { createOneBookingProduct }
