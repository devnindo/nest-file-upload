import { Module } from '@nestjs/common'
import { NestFileUploadController } from './nest-file-upload.controller'
import { NestFileUploadService } from './nest-file-upload.service'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('UPLOAD_JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('UPLOAD_JWT_EXPIRE')
        }
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [NestFileUploadController],
  providers: [NestFileUploadService],
})
export class NestFileUploadModule { }
