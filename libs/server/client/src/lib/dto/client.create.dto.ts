import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateClientDto {
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

  @IsOptional()
  @IsString()
  ccName?: string

  @IsOptional()
  @IsString()
  ccNumber?: string

  @IsOptional()
  @IsString()
  ccExpire?: string

  @IsOptional()
  @IsString()
  ccCvv2?: string

  @IsOptional()
  @IsString()
  ccApproval?: string

  @IsString()
  @IsOptional()
  bankName?: string

  @IsString()
  @IsOptional()
  branchName?: string

  @IsString()
  @IsOptional()
  bankAccount?: string

  @IsString()
  @IsOptional()
  notes?: string

  @IsString()
  @IsNotEmpty()
  ownerUserId: string

  @IsOptional()
  @IsDate()
  createdAt?: Date

  @IsString()
  @IsOptional()
  createdBy?: string

  @IsDate()
  @IsOptional()
  modifeidAt?: Date

  @IsString()
  @IsOptional()
  modifiedBy?: string

  @IsBoolean()
  @IsOptional()
  isActive?: boolean
}
