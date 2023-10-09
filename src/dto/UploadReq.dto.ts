import { IsString, IsNotEmpty, IsArray, IsOptional, IsIn } from 'class-validator'
import { Transform, TransformFnParams } from 'class-transformer'
import { slugify, generateRandomFilename, UPLOAD_ALLOWED_EXTENSION } from '../utils'
import mime from 'mime'


export class UploadReqDTO {
    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    path: string[]

    @IsOptional()
    @IsString()
    @Transform((filename) => filename ? slugify(String(filename)) : slugify(generateRandomFilename()), { toClassOnly: true })
    filename: string

    @IsNotEmpty()
    @IsString()
    @IsIn(UPLOAD_ALLOWED_EXTENSION, {
        message: extension => `The extension "${extension.value}" is not allowed. Allowed extensions are: ${UPLOAD_ALLOWED_EXTENSION.join(', ')}`
    })
    extension: string

    @IsOptional()
    @IsString()
    @Transform(({ obj }: TransformFnParams) => mime.getType(obj.extension) || 'application/octet-stream', { toClassOnly: true })
    mime: string
}