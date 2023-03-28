import { AccommodationType, ProductCategory } from '@prisma/client'
import { Decimal } from '@prisma/client/runtime'
import {
  IsBoolean,
  IsDate,
  IsDecimal,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateBookingProductDto {
  @IsNotEmpty()
  @IsInt()
  tenantId: number

  @IsNotEmpty()
  @IsInt()
  bookingId: number

  @IsNotEmpty()
  @IsInt()
  accountId: number

  @IsOptional()
  @IsInt()
  supplierId?: number

  @IsOptional()
  @IsString()
  supplierName?: string

  @IsOptional()
  @IsInt()
  ownerId: number

  @IsNotEmpty()
  @IsEnum(ProductCategory)
  category: ProductCategory

  @IsOptional()
  @IsString()
  description?: string

  @IsNotEmpty()
  @IsDate()
  startDate: Date

  @IsNotEmpty()
  @IsDate()
  endDate: Date

  @IsOptional()
  @IsString()
  fromLocation?: string

  @IsNotEmpty()
  @IsString()
  toLocation: string

  @IsOptional()
  @IsString()
  termsAndCoditions?: string

  @IsOptional()
  @IsString()
  locatorCode?: string

  @IsOptional()
  @IsDecimal()
  productCost?: Decimal

  @IsOptional()
  @IsDecimal()
  tenantMarkup?: Decimal

  @IsOptional()
  @IsDecimal()
  agencyMarkup?: Decimal

  @IsOptional()
  @IsDecimal()
  agentMarkup?: Decimal

  @IsOptional()
  @IsDecimal()
  localTaxes?: Decimal

  @IsOptional()
  @IsDecimal()
  stateTaxes?: Decimal

  @IsOptional()
  @IsDecimal()
  federalTaxes?: Decimal

  @IsOptional()
  @IsDecimal()
  additionalFees?: Decimal

  @IsOptional()
  @IsDecimal()
  discountPercent?: Decimal

  @IsOptional()
  @IsDecimal()
  discount?: Decimal

  @IsOptional()
  @IsDecimal()
  finalPrice?: Decimal

  @IsOptional()
  @IsDate()
  paymentDueDate?: Date

  @IsOptional()
  @IsDate()
  paidDate?: Date

  @IsOptional()
  @IsDecimal()
  paymentAmout?: Decimal

  @IsOptional()
  @IsString()
  voucherFilePath?: string

  @IsOptional()
  @IsString()
  receiptFilePath?: string

  @IsOptional()
  @IsString()
  invoiceFilePath?: string

  @IsOptional()
  @IsString()
  status?: string

  @IsOptional()
  @IsString()
  hotelName?: string

  @IsOptional()
  @IsInt()
  hotelStarRaiting?: number

  @IsOptional()
  @IsString()
  hotelMealPlean?: string

  @IsOptional()
  @IsEnum(AccommodationType)
  acommodationType?: AccommodationType

  @IsOptional()
  @IsInt()
  bookingGroupId?: number

  @IsOptional()
  @IsString()
  paymentType?: string

  @IsOptional()
  @IsString()
  paymentDescription?: string

  @IsOptional()
  @IsString()
  creditCardType?: string

  @IsOptional()
  @IsInt()
  creditCardLastFourDigits?: number

  @IsOptional()
  @IsString()
  creditCardAuthorizationCode?: string

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
