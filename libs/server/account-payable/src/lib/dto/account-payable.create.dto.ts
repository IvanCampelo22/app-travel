import { Decimal } from '@prisma/client/runtime'
import {
  IsBoolean,
  IsDate,
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator'

export class CreateAccountPayableDto {
  @IsInt()
  @IsNotEmpty()
  bookingProductId: number

  @IsInt()
  @IsNotEmpty()
  bookingId: number

  @IsInt()
  @IsNotEmpty()
  productId: number

  @IsInt()
  @IsOptional()
  payableAccountId?: number

  @IsString()
  @IsNotEmpty()
  payableDescription: string

  @IsDecimal()
  @IsOptional()
  payableAmount?: Decimal

  @IsDate()
  @IsNotEmpty()
  payableDueDate: Date

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
