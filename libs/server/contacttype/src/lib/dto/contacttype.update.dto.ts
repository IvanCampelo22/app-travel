import { IsBoolean, IsDate, IsInt, IsOptional, IsString } from 'class-validator'

export class UpdateContacttypeDto {
  @IsOptional()
  @IsInt()
  tenantId?: number

  @IsOptional()
  @IsInt()
  accountId?: number

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
