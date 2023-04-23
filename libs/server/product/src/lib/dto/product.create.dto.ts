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

export class CreateProductDto {
  @IsNotEmpty()
  @IsInt()
  accountId: number

  @IsNotEmpty()
  @IsInt()
  tenantId: number

  @IsOptional()
  @IsString()
  productName?: string

  @IsOptional()
  @IsString()
  productDescription?: string

  @IsOptional()
  @IsString()
  productType?: string

  @IsOptional()
  @IsInt()
  supplierAccount?: number

  @IsOptional()
  @IsDecimal()
  maxStock?: Decimal

  @IsOptional()
  @IsInt()
  available_stock?: number

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
