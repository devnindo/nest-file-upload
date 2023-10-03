import { Test, TestingModule } from '@nestjs/testing'
import { NestFileUploadController } from './nest-file-upload.controller'
import { NestFileUploadService } from './nest-file-upload.service'

describe('NestFileUploadController', () => {
  let appController: NestFileUploadController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestFileUploadController],
      providers: [NestFileUploadService],
    }).compile()

    appController = app.get<NestFileUploadController>(NestFileUploadController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })
})
