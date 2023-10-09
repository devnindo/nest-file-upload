import { Controller, Get } from '@nestjs/common'
import { NestFileUploadService } from './nest-file-upload.service'
import { UPLOAD_BLOB_PATH } from './utils'

@Controller(UPLOAD_BLOB_PATH)
export class NestFileUploadController {
  constructor(private readonly appService: NestFileUploadService) { }


}
