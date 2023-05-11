import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  NotFoundException,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { UploadService } from '@server/aws'
import { Readable } from 'stream'
import { BookingProductService } from './bookingproducts.service'
import { CreateBookingProductDto } from './dto/bookingproduct.create.dto'
import { UpdateBookingProductDto } from './dto/bookingproduct.update.dto'
@Controller('bookingproducts')
export class BookingProductControllers {
  constructor(
    private readonly service: BookingProductService,
    private readonly uploadService: UploadService
  ) {}

  @Get('booking/:bookingId')
  async index(@Param('bookingId') bookingId?: string) {
    try {
      return this.service.findMany(Number(bookingId))
    } catch (error: any) {
      throw new HttpException(error.message, error.status)
    }
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: any) {
    const stream = new Readable()
    stream.push(file.buffer)
    stream.push(null)
    const url = await this.uploadService.uploadToS3(stream, file.originalname)
    return { message: 'Arquivo enviado com sucesso', url }
  }

  @Post()
  async createMany(@Body('data') data: CreateBookingProductDto[]) {
    try {
      return await this.service.createMany(data)
    } catch (error: any) {
      throw new HttpException(error.message, error.status)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.service.find(Number(id))
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }

  @Patch()
  async update(
    @Body()
    data: UpdateBookingProductDto[]
  ) {
    try {
      return await this.service.update(data)
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.service.destroy(Number(id))
    } catch (error) {
      throw new NotFoundException('Not Found')
    }
  }
}
