import { IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  externalId: string

  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsString()
  email: string
}
