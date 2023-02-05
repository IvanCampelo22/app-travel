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

  async new(externalId: string) {
    const user = (await this.userService.getLoggedUser(externalId))!
    const booking = this.db.booking.create({
      data: {
        tenant: { connect: { id: user.account?.tenantId } },
        account: { connect: { id: user.account?.id } },
        ownerId: user.id
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

    if (!booking?.modifiedAt && !newProducts)
      throw new BadRequestException('Product list is required')

    return this.db.booking.update(input)
  }
}
