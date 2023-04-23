import { IsBoolean, IsDate, IsInt, IsOptional, IsString } from 'class-validator'

export class UpdateClientDto {
  @IsOptional()
  @IsInt()
  accountId?: number

  @IsOptional()
  @IsInt()
  tenantId?: number

  @IsOptional()
  @IsString()
  prefix?: string

  @IsOptional()
  @IsString()
  firstName?: string

  @IsOptional()
  @IsString()
  middleName?: string

  @IsOptional()
  @IsString()
  lastName?: string

  @IsOptional()
  @IsString()
  suffix?: string

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

  @IsOptional()
  @IsDate()
  dateOfBirth?: Date

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
  @IsOptional()
  ownerUserId?: string

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
