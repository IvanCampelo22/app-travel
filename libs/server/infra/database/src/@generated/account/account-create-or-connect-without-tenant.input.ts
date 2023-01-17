import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountWhereUniqueInput } from './account-where-unique.input'
import { Type } from 'class-transformer'
import { AccountCreateWithoutTenantInput } from './account-create-without-tenant.input'

@InputType()
export class AccountCreateOrConnectWithoutTenantInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: AccountWhereUniqueInput

  @Field(() => AccountCreateWithoutTenantInput, { nullable: false })
  @Type(() => AccountCreateWithoutTenantInput)
  create!: AccountCreateWithoutTenantInput
}
