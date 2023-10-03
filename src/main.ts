import { NestFactory } from '@nestjs/core'
import { NestFileUploadModule } from './nest-file-upload.module'

async function bootstrap() {
  const app = await NestFactory.create(NestFileUploadModule)
  await app.listen(3000)
}
bootstrap()
