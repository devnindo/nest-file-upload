import { NestFactory } from '@nestjs/core'
import { NestFileUploadModule } from './nest-file-upload.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(NestFileUploadModule)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000)
}
bootstrap()
