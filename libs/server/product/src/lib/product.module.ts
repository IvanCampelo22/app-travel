import { Module } from '@nestjs/common'
import { ProductController } from './product.controllers'
import { ProductService } from './product.service'

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule {}
