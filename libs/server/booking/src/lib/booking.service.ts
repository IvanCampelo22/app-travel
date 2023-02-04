import { Injectable } from '@nestjs/common'
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
}
