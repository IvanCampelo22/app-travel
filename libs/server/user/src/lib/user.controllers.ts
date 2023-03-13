import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('users')
export class UserControllers {
  constructor(private readonly service: UserService) {}

  @Get()
  async getUser() {
    return await this.service.findMany()
  }
}
