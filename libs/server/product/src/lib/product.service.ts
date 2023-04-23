import { Injectable } from '@nestjs/common'
import { DatabaseService } from './../../../infra/database/src/lib/database.service'

@Injectable()
export class ProductService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return await this.databaseService.product.findMany()
  }
}
