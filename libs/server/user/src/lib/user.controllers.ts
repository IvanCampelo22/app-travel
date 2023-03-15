import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post
} from '@nestjs/common'
import { User } from '@prisma/client'
import { CreateUserDto } from './dto/user.create.dto'
import { UserService } from './user.service'

@Controller('users')
export class UserControllers {
  constructor(private readonly service: UserService) {}

  @Get()
  async getUser() {
    return await this.service.findMany()
  }

  @Post()
  async create(@Body() data: CreateUserDto): Promise<User> {
    try {
      return await this.service.create(data)
    } catch (error) {
      throw new BadRequestException('Bad Request')
    }
  }

  @Get(':id')
  async findOne(@Param(':id') id: number) {
    try {
      return await this.service.find(id)
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }
}
