import { Decimal } from '@prisma/client/runtime'
import {
  IsBoolean,
  IsDate,
  IsDecimal,
  IsInt,
  IsOptional,
  IsString
} from 'class-validator'

export class UpdateAccountReceivableDto {
  @IsOptional()
  @IsInt()
  bookingId?: number

  @IsOptional()
  @IsInt()
  clientId?: number

  @IsOptional()
  @IsInt()
  productId?: number

  @IsOptional()
  @IsInt()
  accountId?: number

  @IsOptional()
  @IsString()
  receivableDescription?: string

  @IsOptional()
  @IsDecimal()
  receivableAmount?: Decimal

  @IsOptional()
  @IsDate()
  receivableDueDate?: Date

  @IsOptional()
  @IsDate()
  receivableDate?: Date

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
