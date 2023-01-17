import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input'

@InputType()
export class AccountScalarWhereWithAggregatesInput {
  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AccountScalarWhereWithAggregatesInput>

  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AccountScalarWhereWithAggregatesInput>

  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AccountScalarWhereWithAggregatesInput>

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

  @Field(() => BigIntWithAggregatesFilter, { nullable: true })
  tenantId?: BigIntWithAggregatesFilter
}
