import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UploadReqDTO } from './dto/UploadReq.dto'
import { ConfigService } from '@nestjs/config'
import { generatePath } from './utils'

@Injectable()
export class NestFileUploadService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) { }

  generateUploadURI(payload: UploadReqDTO): { uri: string; token: string } {
    const token = this.jwtService.sign(payload)
    const blobPath = this.configService.get<string>('BLOB_PATH', 'blob')
    const uri = `${blobPath}/${generatePath(payload.path)}?token=${token}`
    return { uri: uri, token }
  }

}
