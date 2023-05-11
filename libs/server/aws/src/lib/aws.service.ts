import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { S3 } from 'aws-sdk'
import { Readable } from 'stream'

@Injectable()
export class UploadService {
  private s3: S3

  constructor(private readonly configService: ConfigService) {
    this.s3 = new S3({
      accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY')
    })
  }

  async uploadToS3(stream: Readable, filename: string): Promise<string> {
    const bucketName = this.configService.get('S3_BUCKET_NAME')
    const key = `${Date.now()}-${filename}`
    const uploadParams = {
      Bucket: bucketName,
      Key: key,
      Body: stream
    }
    const response = await this.s3.upload(uploadParams).promise()
    return response.Location
  }
}
