import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { AccountCreateManyTenantInput } from './account-create-many-tenant.input'
import { Type } from 'class-transformer'

@InputType()
export class AccountCreateManyTenantInputEnvelope {
  @Field(() => [AccountCreateManyTenantInput], { nullable: false })
  @Type(() => AccountCreateManyTenantInput)
  data!: Array<AccountCreateManyTenantInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
