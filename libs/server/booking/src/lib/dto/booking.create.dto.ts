import { Decimal } from '@prisma/client/runtime'
import {
  IsBoolean,
  IsDate,
  IsDecimal,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateBookingDto {
  @IsOptional()
  @IsNumber()
  tenantId?: number

  @IsNumber()
  accountId: number

  @IsOptional()
  @IsNumber()
  ownerId?: number

  @IsOptional()
  @IsString()
  customerName?: string

  @IsOptional()
  @IsString()
  customerEmail?: string

  @IsOptional()
  @IsString()
  customerPhone?: string

  @IsOptional()
  @IsString()
  postalCode?: string

  @IsOptional()
  @IsString()
  fromCity?: string

  @IsOptional()
  @IsString()
  toCity?: string

  @IsOptional()
  @IsDate()
  travelDate?: Date

  @IsOptional()
  @IsString()
  travelPeriod?: string

  @IsOptional()
  @IsNumber()
  adultsCount?: number

  @IsOptional()
  @IsNumber()
  childrenCount?: number

  @IsOptional()
  @IsNumber()
  seniorsCount?: number

  @IsOptional()
  @IsString()
  requestDescription?: string

  @IsOptional()
  @IsString()
  locatorCode?: string

  @IsOptional()
  @IsDecimal()
  totalPrice?: Decimal

  @IsOptional()
  @IsDecimal()
  totalCost?: Decimal

  @IsOptional()
  @IsString()
  paymentType?: string

  @IsOptional()
  @IsString()
  paymentStatus?: string

  @IsOptional()
  @IsDate()
  paymentDateTime?: Date

  @IsOptional()
  @IsDecimal()
  discountPercent?: Decimal

  @IsOptional()
  @IsDecimal()
  discountAmount?: Decimal

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
}
