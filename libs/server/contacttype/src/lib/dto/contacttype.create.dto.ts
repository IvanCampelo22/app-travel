import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateContacttypeDto {
  @IsNotEmpty()
  @IsInt()
  tenantId: number

  @IsNotEmpty()
  @IsInt()
  accountId: number

  @IsOptional()
  @IsString()
  contactTypeDescription?: string

  @IsOptional()
  @IsDate()
  createdAt?: Date

  @IsOptional()
  @IsString()
  createdBy?: string

  @IsOptional()
  @IsDate()
  modifiedAt?: Date

  @IsOptional()
  @IsString()
  modifiedBy?: string

  @IsOptional()
  @IsBoolean()
  isActive?: boolean
}
