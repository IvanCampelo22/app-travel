import { IsBoolean, IsDate, IsInt, IsOptional, IsString } from 'class-validator'

export class UpdateAccountTypeDto {
  @IsOptional()
  @IsString()
  accountTypeCd?: string

  @IsOptional()
  @IsInt()
  tenantId?: number

  @IsOptional()
  @IsString()
  accountTypeDescription?: string

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
