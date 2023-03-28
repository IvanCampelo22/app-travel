import { Injectable } from '@nestjs/common'
import { Booking } from '@prisma/client'
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
        accountId: account.id
      }
    })
    return booking
  }

  async find(id: number) {
    return this.db.booking.findFirst({ where: { id } })
  }

  async findMany(
    startDate: Date | null,
    endDate: Date | null
  ): Promise<Booking[]> {
    console.log('startDate:', startDate)
    console.log('endDate:', endDate)
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
    return await this.db.booking.findMany({ where })
  }

  async update(id: number, input: UpdateBookingDto) {
    return this.db.booking.update({ where: { id }, data: { ...input } })
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
