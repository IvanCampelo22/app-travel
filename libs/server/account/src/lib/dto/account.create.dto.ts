import {
  IsArray,
  IsBoolean,
  IsDate,
  IsInt,
  IsJSON,
  IsString
} from 'class-validator'

export class CreateAccountDto {
  @IsInt()
  id: number

  @IsInt()
  tenant: number

  @IsInt()
  parent: number

  @IsInt()
  ownerId: number

  @IsArray()
  childAccounts: Array<'childAccounts'>

  @IsArray()
  accountUsers: Array<'accountUsers'>

  @IsString()
  name: string

  @IsString()
  category: string

  @IsString()
  dobName: string

  @IsString()
  taxId: string

  @IsString()
  ssn: string

  @IsString()
  brand: string

  @IsString()
  email: string

  @IsString()
  phone: string

  @IsString()
  mobilePhone: string

  @IsString()
  fax: string

  @IsJSON()
  billingAdresses: JSON

  @IsJSON()
  shippingAdresses: JSON

  @IsString()
  termsAndConditions: string

  @IsString()
  privacyPolicy: string

  @IsString()
  bankName: string

  @IsString()
  branch: string

  @IsString()
  bankAccount: string

  @IsString()
  notes: string

  @IsString()
  countryCode: string

  @IsString()
  currencyCode: string

  @IsString()
  locale: string

  @IsString()
  timeZone: string

  @IsString()
  referralSource: string

  @IsString()
  domain: string

  @IsString()
  siteConfig: string

  @IsDate()
  createdAt: Date

  @IsString()
  createdBy: string

  @IsDate()
  modifiedAt: Date

  @IsString()
  modifiedBy: string

  @IsBoolean()
  isActive: string

  @IsArray()
  bookings: Array<'bookings'>

  @IsArray()
  purchasing: Array<'purchasing'>

  @IsArray()
  bookingTravelers: Array<'bookingTravelers'>

  @IsArray()
  bookingProducts: Array<'BookingProducts'>
}
