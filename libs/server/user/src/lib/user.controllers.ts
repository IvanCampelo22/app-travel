import { BadRequestException, Controller } from '@nestjs/common'
import { User } from '@prisma/client'
import { CreateUserDto } from './dto/user.create.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserControllers {
  constructor(private readonly service: UserService) {}

  async create(input: CreateUserDto): Promise<User> {
    try {
      return this.service.create(input)
    } catch (error) {
      throw new BadRequestException('Bad Request')
    }
  }
}
