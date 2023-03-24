import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { MainModule } from './main.module'

async function bootstrap() {
  const app = await NestFactory.create(MainModule)
  app.enableCors({
    origin: ['http://localhost:4200', 'https://web.dev.viagem10.com'],
    credentials: true,
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS,PATCH'
  })
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  const port = process.env.PORT || 3000
  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  )
}

bootstrap()
