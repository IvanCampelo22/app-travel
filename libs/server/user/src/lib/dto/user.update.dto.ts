import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'

export class UpdateUserDto {
  @IsOptional()
  @IsNumber()
  tenantId?: number

  @IsOptional()
  @IsNumber()
  accountId?: number

  @IsOptional()
  @IsString()
  externalId?: string

  @IsOptional()
  @IsString()
  firstName?: string

  @IsOptional()
  @IsString()
  lastName?: string

  @IsOptional()
  @IsString()
  companyName?: string

  @IsOptional()
  @IsString()
  jobTitle?: string

  @IsOptional()
  @IsString()
  department?: string

  @IsOptional()
  @IsString()
  managerName?: string

  @IsOptional()
  @IsString()
  email?: string

  @IsOptional()
  @IsString()
  phone?: string

  @IsOptional()
  @IsString()
  mobilePhone?: string

  @IsOptional()
  @IsString()
  fax?: string

  @IsOptional()
  @IsString()
  gender?: string

  @IsOptional()
  @IsDate()
  birthDate?: Date

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

  @IsOptional()
  @IsBoolean()
  isMaster?: boolean
}
