import { RoomCategory } from '@prisma/client'
import { Type } from 'class-transformer'
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator'

export class CreateBookingProductRoomCreateDto {
  @IsNotEmpty()
  @IsInt()
  bookingProductId: number

  @IsNotEmpty()
  @IsEnum(RoomCategory)
  category: RoomCategory

  @IsNotEmpty()
  @IsInt()
  adultsCount: number

  @IsNotEmpty()
  @IsInt()
  minorsCount: number

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Number)
  ageOfMinors: number[]

  @IsOptional()
  @IsDate()
  createdAt?: Date

  @IsOptional()
  @IsString()
  createdBy?: string

  @IsOptional()
  @IsString()
  modifiedAt?: Date

  @IsOptional()
  @IsString()
  modifiedBy?: string

  @IsOptional()
  @IsBoolean()
  isActive?: boolean
}
