import { Injectable } from '@nestjs/common'
import { DatabaseService } from './../../../infra/database/src/lib/database.service'

@Injectable()
export class AccountPayableService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return await this.databaseService.client.findMany()
  }
}
