import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TenantCreateWithoutAccountInput } from './tenant-create-without-account.input'
import { Type } from 'class-transformer'
import { TenantCreateOrConnectWithoutAccountInput } from './tenant-create-or-connect-without-account.input'
import { TenantUpsertWithoutAccountInput } from './tenant-upsert-without-account.input'
import { TenantWhereUniqueInput } from './tenant-where-unique.input'
import { TenantUpdateWithoutAccountInput } from './tenant-update-without-account.input'

@InputType()
export class TenantUpdateOneRequiredWithoutAccountNestedInput {
  @Field(() => TenantCreateWithoutAccountInput, { nullable: true })
  @Type(() => TenantCreateWithoutAccountInput)
  create?: TenantCreateWithoutAccountInput

  @Field(() => TenantCreateOrConnectWithoutAccountInput, { nullable: true })
  @Type(() => TenantCreateOrConnectWithoutAccountInput)
  connectOrCreate?: TenantCreateOrConnectWithoutAccountInput

  @Field(() => TenantUpsertWithoutAccountInput, { nullable: true })
  @Type(() => TenantUpsertWithoutAccountInput)
  upsert?: TenantUpsertWithoutAccountInput

  @Field(() => TenantWhereUniqueInput, { nullable: true })
  @Type(() => TenantWhereUniqueInput)
  connect?: TenantWhereUniqueInput

  @Field(() => TenantUpdateWithoutAccountInput, { nullable: true })
  @Type(() => TenantUpdateWithoutAccountInput)
  update?: TenantUpdateWithoutAccountInput
}
