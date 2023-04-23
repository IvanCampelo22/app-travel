import { Decimal } from '@prisma/client/runtime'
import {
  IsBoolean,
  IsDate,
  IsDecimal,
  IsInt,
  IsOptional,
  IsString
} from 'class-validator'

export class UpdateAccountPayableDto {
  @IsInt()
  @IsOptional()
  bookingProductId?: number

  @IsInt()
  @IsOptional()
  bookingId?: number

  @IsInt()
  @IsOptional()
  productId?: number

  @IsInt()
  @IsOptional()
  payableAccountId?: number

  @IsString()
  @IsOptional()
  payableDescription?: string

  @IsDecimal()
  @IsOptional()
  payableAmount?: Decimal

  @IsDate()
  @IsOptional()
  payableDueDate?: Date

  @IsDate()
  @IsOptional()
  paymentDate?: Date

  @IsDate()
  @IsOptional()
  createdAt?: Date

  @IsString()
  @IsOptional()
  createdBy?: string

  @IsDate()
  @IsOptional()
  modifiedAta?: Date

  @IsDate()
  @IsString()
  modifiedBy?: string

  @IsBoolean()
  @IsOptional()
  isActive?: boolean
}
