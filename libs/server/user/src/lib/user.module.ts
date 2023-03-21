import { Global, Module } from '@nestjs/common'
import { UserControllers } from './user.controllers'
import { UserService } from './user.service'

@Global()
@Module({
  controllers: [UserControllers],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
