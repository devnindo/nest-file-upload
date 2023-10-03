import { Injectable } from '@nestjs/common'

@Injectable()
export class NestFileUploadService {
  getHello(): string {
    return 'Hello World!'
  }
}
