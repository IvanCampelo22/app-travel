import { Module } from '@nestjs/common'
import { UserModule } from '@server/user'
import { ProductController } from './product.controllers'
import { ProductService } from './product.service'

@Module({
  imports: [UserModule],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService]
})
export class ProductModule {}
