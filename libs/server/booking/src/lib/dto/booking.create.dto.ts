import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateBookingDto {
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
}
