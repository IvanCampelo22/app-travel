import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { Type } from 'class-transformer'
import { AccountUpdateWithoutTenantInput } from './account-update-without-tenant.input'

@InputType()
export class AccountUpdateWithWhereUniqueWithoutTenantInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: AccountWhereUniqueInput

  @Field(() => AccountUpdateWithoutTenantInput, { nullable: false })
  @Type(() => AccountUpdateWithoutTenantInput)
  data!: AccountUpdateWithoutTenantInput
}
