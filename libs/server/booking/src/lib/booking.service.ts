import { Injectable } from '@nestjs/common'
import { BookingStatus } from '@prisma/client'
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
    const accounts = await this.db.account.findMany({
      select: {
        id: true,
        tenantId: true,
        dobName: true,
        accountUsers: { select: { id: true } }
      }
    })

    const account = accounts.length > 0 ? accounts[0] : null

    if (account === null) {
      throw new Error('Nenhum registro encontrado')
    }

    const users = await this.db.user.findMany({
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

    const booking = this.db.booking.create({
      data: {
        tenantId: account.tenantId,
        accountId: account.id,
        ownerId: user.id,
        createdBy: user.firstName,
        modifiedBy: user.firstName,
        status: BookingStatus.Draft,
        customerId: user.id,
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
    page: number,
    size: number
  ) {
    const where: Record<string, any> = {}

    if (startDate && endDate) {
      where['createdAt'] = {
        gte: startDate,
        lte: new Date(endDate.getTime() + 24 * 60 * 60 * 1000) // adiciona 1 dia em milissegundos
      }
    } else if (startDate) {
      where['createdAt'] = {
        gte: startDate,
        lte: new Date(startDate.getTime() + 24 * 60 * 60 * 1000)
      }
    } else if (endDate) {
      where['createdAt'] = {
        gte: new Date(endDate.getTime() - 24 * 60 * 60 * 1000),
        lte: endDate
      }
    }

    where['isActive'] = true

    const totalCount = await this.db.booking.count({ where })
    const totalPages = Math.ceil(totalCount / size)
    const adjustedPage = Math.min(page, totalPages)

    if (size <= 0) {
      throw new Error(
        'Invalid value for size argument: must be greater than zero'
      )
    }

    const skip = Math.max((adjustedPage - 1) * size, 0)

    const bookings = await this.db.booking.findMany({
      where,
      skip,
      take: size
    })

    return {
      bookings,
      totalPages
    }
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
