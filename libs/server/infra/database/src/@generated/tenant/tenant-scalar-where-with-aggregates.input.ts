import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input'
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input'
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input'

@InputType()
export class TenantScalarWhereWithAggregatesInput {
  @Field(() => [TenantScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<TenantScalarWhereWithAggregatesInput>

  @Field(() => [TenantScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<TenantScalarWhereWithAggregatesInput>

  @Field(() => [TenantScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<TenantScalarWhereWithAggregatesInput>

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  id?: BigIntWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  dobName?: StringNullableWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  taxId?: StringNullableWithAggregatesFilter

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  phone?: StringNullableWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  mobilePhone?: StringNullableWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  contactPrefix?: StringNullableWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  contactFirstName?: StringNullableWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  contactMiddleName?: StringNullableWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  contactLastName?: StringNullableWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  brandUrl?: StringNullableWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  ownerUserId?: StringNullableWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  countryCode?: StringNullableWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  currencyCode?: StringNullableWithAggregatesFilter

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  locale?: StringNullableWithAggregatesFilter

  @Field(() => BoolNullableWithAggregatesFilter, { nullable: true })
  isActive?: BoolNullableWithAggregatesFilter

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeNullableWithAggregatesFilter

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeNullableWithAggregatesFilter
}
