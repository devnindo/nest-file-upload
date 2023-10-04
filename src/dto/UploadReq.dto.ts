import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator'
import { Transform, TransformFnParams } from 'class-transformer'
import { slugify, generateRandomFilename } from '../utils'
import mime from 'mime'

export class UploadReqDTO {

    @IsNotEmpty()
    @IsArray()
    @IsString({ each: true })
    path: string[]

    @IsOptional()
    @IsString()
    @Transform((value) => value ? slugify(String(value)) : slugify(generateRandomFilename()), { toClassOnly: true })
    filename: string

    @IsNotEmpty()
    @IsString()
    extension: string

    @IsOptional()
    @IsString()
    @Transform(({ obj }: TransformFnParams) => mime.getType(obj.extension) || 'application/octet-stream', { toClassOnly: true })
    mime: string
}