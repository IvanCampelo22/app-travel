import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateUserDto {
  @IsOptional()
  @IsNumber()
  tenantId?: number

  @IsOptional()
  @IsNumber()
  accountId?: number

  @IsString()
  externalId: string

  @IsString()
  firstName: string

  @IsString()
  lastName: string

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

  @IsString()
  email: string

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
  modifiedAt: Date

  @IsOptional()
  @IsString()
  modifiedBy: string

  @IsOptional()
  @IsBoolean()
  isActive: boolean

  @IsOptional()
  @IsBoolean()
  isMaster: boolean
}
