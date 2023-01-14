import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class TenantCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number

  @Field(() => Int, { nullable: false })
  name!: number

  @Field(() => Int, { nullable: false })
  dobName!: number

  @Field(() => Int, { nullable: false })
  taxId!: number

  @Field(() => Int, { nullable: false })
  email!: number

  @Field(() => Int, { nullable: false })
  phone!: number

  @Field(() => Int, { nullable: false })
  mobilePhone!: number

  @Field(() => Int, { nullable: false })
  contactPrefix!: number

  @Field(() => Int, { nullable: false })
  contactFirstName!: number

  @Field(() => Int, { nullable: false })
  contactMiddleName!: number

  @Field(() => Int, { nullable: false })
  contactLastName!: number

  @Field(() => Int, { nullable: false })
  brandUrl!: number

  @Field(() => Int, { nullable: false })
  ownerUserId!: number

  @Field(() => Int, { nullable: false })
  countryCode!: number

  @Field(() => Int, { nullable: false })
  currencyCode!: number

  @Field(() => Int, { nullable: false })
  locale!: number

  @Field(() => Int, { nullable: false })
  isActive!: number

  @Field(() => Int, { nullable: false })
  createdAt!: number

  @Field(() => Int, { nullable: false })
  updatedAt!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}
