import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TenantCreateWithoutAccountInput } from './tenant-create-without-account.input'
import { Type } from 'class-transformer'
import { TenantCreateOrConnectWithoutAccountInput } from './tenant-create-or-connect-without-account.input'
import { TenantWhereUniqueInput } from './tenant-where-unique.input'

@InputType()
export class TenantCreateNestedOneWithoutAccountInput {
  @Field(() => TenantCreateWithoutAccountInput, { nullable: true })
  @Type(() => TenantCreateWithoutAccountInput)
  create?: TenantCreateWithoutAccountInput

  @Field(() => TenantCreateOrConnectWithoutAccountInput, { nullable: true })
  @Type(() => TenantCreateOrConnectWithoutAccountInput)
  connectOrCreate?: TenantCreateOrConnectWithoutAccountInput

  @Field(() => TenantWhereUniqueInput, { nullable: true })
  @Type(() => TenantWhereUniqueInput)
  connect?: TenantWhereUniqueInput
}
