import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BigIntFilter } from '../prisma/big-int-filter.input'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'

@InputType()
export class AccountScalarWhereInput {
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  AND?: Array<AccountScalarWhereInput>

  @Field(() => [AccountScalarWhereInput], { nullable: true })
  OR?: Array<AccountScalarWhereInput>

  @Field(() => [AccountScalarWhereInput], { nullable: true })
  NOT?: Array<AccountScalarWhereInput>

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

  @Field(() => BigIntFilter, { nullable: true })
  tenantId?: BigIntFilter
}
