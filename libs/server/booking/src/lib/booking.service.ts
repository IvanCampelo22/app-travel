import { BadRequestException, Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'

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
        ownerId: account.accountUsers[0].id
      }
    })
    return booking
  }

  async find(where: Prisma.BookingWhereInput) {
    return this.db.booking.findFirst({ where })
  }

  async findMany() {
    return this.db.booking.findMany()
  }

  async update(input: Prisma.BookingUpdateArgs) {
    const { id } = input.where
    const booking = await this.find({ id })
    const newProducts = input.data.products?.createMany?.data

    if (booking?.modifiedAt === booking?.createdAt && !newProducts)
      throw new BadRequestException('Product list is required')

    return this.db.booking.update(input)
  }
}
