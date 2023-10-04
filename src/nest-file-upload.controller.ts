import { Controller, Get } from '@nestjs/common'
import { NestFileUploadService } from './nest-file-upload.service'
import { ConfigService } from '@nestjs/config'

const blobPath = new ConfigService().get<string>('BLOB_PATH', 'blob')

@Controller(blobPath)
export class NestFileUploadController {
  constructor(private readonly appService: NestFileUploadService) { }


}
