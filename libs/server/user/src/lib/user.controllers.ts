import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { User } from '@prisma/client'
import { CreateUserDto } from './dto/user.create.dto'
import { UpdateUserDto } from './dto/user.update.dto'
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
  async findOne(@Param(':id') id: string) {
    try {
      return await this.service.find(Number(id))
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }

  @Patch(':id')
  async update(@Param(':id') id: string, @Body() data: UpdateUserDto) {
    try {
      return await this.service.update(Number(id), data)
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }

  @Get(':externalId')
  async getLoggedUser(@Param(':externalId') externalId: string) {
    try {
      return await this.service.getLoggedUser(externalId)
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }
}
