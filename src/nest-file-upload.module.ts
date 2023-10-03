import { Module } from '@nestjs/common'
import { NestFileUploadController } from './nest-file-upload.controller'
import { NestFileUploadService } from './nest-file-upload.service'

@Module({
  imports: [],
  controllers: [NestFileUploadController],
  providers: [NestFileUploadService],
})
export class NestFileUploadModule { }
