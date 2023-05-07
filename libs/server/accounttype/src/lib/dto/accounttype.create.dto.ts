import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateAccountTypeDto {
  @IsNotEmpty()
  @IsString()
  accountTypeCd: string

  @IsNotEmpty()
  @IsInt()
  tenantId: number

  @IsNotEmpty()
  @IsString()
  accountTypeDescription: string

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
