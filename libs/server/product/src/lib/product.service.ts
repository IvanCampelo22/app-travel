import { Injectable } from '@nestjs/common'
import { DatabaseService } from '@server/database'
import { UserService } from '@server/user'
import { CreateProductDto } from './dto/product.create.dto'
import { UpdateProductDto } from './dto/product.update.dto'

@Injectable()
export class ProductService {
  constructor(
    private readonly db: DatabaseService,
    private readonly user: UserService
  ) {}

  async findAll() {
    return await this.db.product.findMany()
  }

  async findOne(id: number) {
    return await this.db.product.findUnique({
      where: { id }
    })
  }

  async create(data: CreateProductDto) {
    return await this.db.product.create({
      data
    })
  }

  async update(id: number, data: UpdateProductDto) {
    return await this.db.product.update({
      where: { id },
      data
    })
  }

  async destroy(id: number) {
    const product = await this.db.product.update({
      where: { id },
      data: { isActive: false }
    })

    await this.user.destroy(product.id)

    return product
  }
}
