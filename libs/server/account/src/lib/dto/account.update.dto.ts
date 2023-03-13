import { AccountCategory } from '@prisma/client'
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'

export class UpdateAccountDto {
  @IsNumber()
  tenantId?: number

  @IsNumber()
  ownerId?: number

  @IsString()
  name?: string

  @IsString()
  category?: AccountCategory

  @IsOptional()
  @IsString()
  dobName?: string

  @IsOptional()
  @IsString()
  taxId?: string

  @IsOptional()
  @IsString()
  ssn?: string

  @IsOptional()
  @IsString()
  brand?: string

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
  termsAndCondition?: string

  @IsOptional()
  @IsString()
  privacyPolicy?: string

  @IsOptional()
  @IsString()
  bankName?: string

  @IsOptional()
  @IsString()
  branch?: string

  @IsOptional()
  @IsString()
  bankAccount?: string

  @IsOptional()
  @IsString()
  notes?: string

  @IsOptional()
  @IsString()
  countryCode?: string

  @IsOptional()
  @IsString()
  currencyCode?: string

  @IsOptional()
  @IsString()
  locale?: string

  @IsOptional()
  @IsString()
  timeZone?: string

  @IsOptional()
  @IsString()
  referralSource?: string

  @IsOptional()
  @IsString()
  domain?: string

  @IsOptional()
  @IsString()
  siteConfig?: string

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
