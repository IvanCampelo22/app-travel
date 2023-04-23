import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common'
import { CreateProductDto } from './dto/product.create.dto'
import { UpdateProductDto } from './dto/product.update.dto'
import { ProductService } from './product.service'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    return await this.productService.findAll()
  }

  @Get(':id')
  async findOne(@Param(':id') id: number) {
    return await this.productService.findOne(id)
  }

  @Post()
  async create(@Body() data: CreateProductDto) {
    return await this.productService.create(data)
  }

  @Patch(':id')
  async update(@Param(':id') id: number, @Body() data: UpdateProductDto) {
    return await this.productService.update(id, data)
  }

  @Delete(':id')
  async delete(@Param(':id') id: number) {
    return await this.productService.destroy(id)
  }
}
