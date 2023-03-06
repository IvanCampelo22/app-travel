import { AccountCategory } from '@prisma/client'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateAccountDto {
  @IsOptional()
  @IsNumber()
  tenantId?: number

  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  email?: string

  @IsOptional()
  @IsString()
  category?: AccountCategory

  @IsOptional()
  @IsString()
  phone?: string

  @IsOptional()
  @IsNumber()
  ownerId?: number
}
