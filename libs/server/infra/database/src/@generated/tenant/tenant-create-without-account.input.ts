import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class TenantCreateWithoutAccountInput {
  @Field(() => String, { nullable: true })
  id?: bigint | number

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: true })
  dobName?: string

  @Field(() => String, { nullable: true })
  taxId?: string

  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => String, { nullable: true })
  phone?: string

  @Field(() => String, { nullable: true })
  mobilePhone?: string

  @Field(() => String, { nullable: true })
  contactPrefix?: string

  @Field(() => String, { nullable: true })
  contactFirstName?: string

  @Field(() => String, { nullable: true })
  contactMiddleName?: string

  @Field(() => String, { nullable: true })
  contactLastName?: string

  @Field(() => String, { nullable: true })
  brandUrl?: string

  @Field(() => String, { nullable: true })
  ownerUserId?: string

  @Field(() => String, { nullable: true })
  countryCode?: string

  @Field(() => String, { nullable: true })
  currencyCode?: string

  @Field(() => String, { nullable: true })
  locale?: string

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string
}
