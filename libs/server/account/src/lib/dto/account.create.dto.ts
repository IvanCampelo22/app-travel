import { AccountCategory } from '@prisma/client'
import { IsNumber, IsString } from 'class-validator'

export class CreateAccountDto {
  @IsNumber()
  tenantId: number

  @IsNumber()
  ownerId: number

  @IsString()
  name: string

  @IsString()
  category: AccountCategory

  @IsString()
  email: string

  @IsString()
  phone: string
}
