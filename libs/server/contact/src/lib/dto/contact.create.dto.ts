import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateContactDto {
  @IsNotEmpty()
  @IsInt()
  accountId: number

  @IsNotEmpty()
  @IsInt()
  tenantId: number

  @IsOptional()
  @IsString()
  prefix?: string

  @IsNotEmpty()
  @IsString()
  firstName: string

  @IsOptional()
  @IsString()
  middleName?: string

  @IsNotEmpty()
  @IsString()
  lastName: string

  @IsOptional()
  @IsString()
  suffix?: string

  @IsOptional()
  @IsString()
  contactTypeCd?: string

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

  @IsEmail()
  @IsNotEmpty()
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
  mailingAdress1?: string

  @IsOptional()
  @IsString()
  mailingAdress2?: string

  @IsOptional()
  @IsString()
  mailingAdress3?: string

  @IsOptional()
  @IsString()
  mailingCity?: string

  @IsOptional()
  @IsString()
  mailingState?: string

  @IsOptional()
  @IsString()
  mailingCountry?: string

  @IsOptional()
  @IsString()
  mailingPostalCode?: string

  @IsOptional()
  @IsString()
  otherAdress1?: string

  @IsOptional()
  @IsString()
  otherAdress2?: string

  @IsOptional()
  @IsString()
  otherAdress3?: string

  @IsOptional()
  @IsString()
  otherCity?: string

  @IsOptional()
  @IsString()
  otherState?: string

  @IsOptional()
  @IsString()
  otherCountry?: string

  @IsOptional()
  @IsString()
  otherPostalCode?: string

  @IsOptional()
  @IsString()
  gender?: string

  @IsNotEmpty()
  @IsDate()
  dateOfBirth: Date

  @IsNotEmpty()
  @IsBoolean()
  allowCreateUser: boolean

  @IsOptional()
  @IsString()
  ownerUserId?: string

  @IsOptional()
  @IsString()
  contactUserId?: string

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
