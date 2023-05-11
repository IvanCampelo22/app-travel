import { Module } from '@nestjs/common'
import { UploadService } from './aws.service'

@Module({
  controllers: [],
  providers: [UploadService],
  exports: [UploadService]
})
export class AwsModule {}
