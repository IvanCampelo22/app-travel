import { Prisma, ProductCategory } from '@prisma/client'

const updateOneBooking = (id: number): Prisma.BookingUpdateArgs => {
  return {
    data: {
      products: {
        createMany: {
          data: [
            {
              tenantId: 1,
              accountId: 1,
              ownerId: 1,
              category: ProductCategory.Accommodation,
              toLocation: 'Miami',
              startDate: Date.now().toString(),
              endDate: Date.now().toPrecision(),
              adultsCount: 2,
              minorsCount: 2,
              ageOfMinors: [1, 2]
            }
          ]
        }
      }
    },
    where: { id }
  }
}

export { updateOneBooking }
