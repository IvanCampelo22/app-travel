import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BigIntFilter } from '../prisma/big-int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input'
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input'
import { AccountListRelationFilter } from '../account/account-list-relation-filter.input'

@InputType()
export class TenantWhereInput {
  @Field(() => [TenantWhereInput], { nullable: true })
  AND?: Array<TenantWhereInput>

  @Field(() => [TenantWhereInput], { nullable: true })
  OR?: Array<TenantWhereInput>

  @Field(() => [TenantWhereInput], { nullable: true })
  NOT?: Array<TenantWhereInput>

  @Field(() => BigIntFilter, { nullable: true })
  id?: BigIntFilter

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter

  @Field(() => StringNullableFilter, { nullable: true })
  dobName?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  taxId?: StringNullableFilter

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter

  @Field(() => StringNullableFilter, { nullable: true })
  phone?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  mobilePhone?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  contactPrefix?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  contactFirstName?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  contactMiddleName?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  contactLastName?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  brandUrl?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  ownerUserId?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  countryCode?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  currencyCode?: StringNullableFilter

  @Field(() => StringNullableFilter, { nullable: true })
  locale?: StringNullableFilter

  @Field(() => BoolNullableFilter, { nullable: true })
  isActive?: BoolNullableFilter

  @Field(() => DateTimeNullableFilter, { nullable: true })
  createdAt?: DateTimeNullableFilter

  @Field(() => DateTimeNullableFilter, { nullable: true })
  updatedAt?: DateTimeNullableFilter

  @Field(() => AccountListRelationFilter, { nullable: true })
  Account?: AccountListRelationFilter
}
