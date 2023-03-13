import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator'

export class UpdateTenantDto {
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  dobName?: string

  @IsOptional()
  @IsString()
  taxId?: string

  @IsOptional()
  @IsString()
  brand?: string

  @IsOptional()
  @IsString()
  contactPrefix?: string

  @IsOptional()
  @IsString()
  contactFirstName?: string

  @IsOptional()
  @IsString()
  contactMiddleName?: string

  @IsOptional()
  @IsString()
  contactLastName?: string

  @IsOptional()
  @IsString()
  contactSuffix?: string

  @IsOptional()
  @IsString()
  jobTitle?: string

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
  termsAndConditions?: string

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
  modifedAt?: Date

  @IsOptional()
  @IsString()
  modifedBy?: string

  @IsOptional()
  @IsBoolean()
  isActive?: boolean

  @IsOptional()
  @IsBoolean()
  isMaster?: boolean
}
