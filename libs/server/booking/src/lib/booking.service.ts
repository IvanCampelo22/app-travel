import { Injectable } from '@nestjs/common'
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

  async findMany() {
    return this.db.booking.findMany()
  }

  async update(id: number, input: UpdateBookingDto) {
    return this.db.tenant.update({ where: { id }, data: { ...input } })
  }

  async destroy(id: number) {
    const tenant = await this.db.tenant.update({
      where: { id },
      data: { isActive: false }
    })

    await this.userService.destroy(tenant.id)

    return tenant
  }
}
