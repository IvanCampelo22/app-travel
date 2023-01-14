import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TenantCreateNestedOneWithoutAccountInput } from '../tenant/tenant-create-nested-one-without-account.input'

@InputType()
export class AccountCreateInput {
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

  @Field(() => TenantCreateNestedOneWithoutAccountInput, { nullable: false })
  tenant!: TenantCreateNestedOneWithoutAccountInput
}
