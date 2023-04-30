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

export class CreateAccountReceivableDto {
  @IsNotEmpty()
  @IsInt()
  bookingId: number

  @IsNotEmpty()
  @IsInt()
  clientId: number

  @IsNotEmpty()
  @IsInt()
  productId: number

  @IsNotEmpty()
  @IsInt()
  accountId: number

  @IsOptional()
  @IsString()
  receivableDescription?: string

  @IsOptional()
  @IsDecimal()
  receivableAmount?: Decimal

  @IsNotEmpty()
  @IsDate()
  receivableDueDate: Date

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
