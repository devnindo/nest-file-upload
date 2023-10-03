import { Controller, Get } from '@nestjs/common'
import { NestFileUploadService } from './nest-file-upload.service'

@Controller()
export class NestFileUploadController {
  constructor(private readonly appService: NestFileUploadService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
