import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { TenantWhereInput } from './tenant-where.input'

@InputType()
export class TenantRelationFilter {
  @Field(() => TenantWhereInput, { nullable: true })
  is?: TenantWhereInput

  @Field(() => TenantWhereInput, { nullable: true })
  isNot?: TenantWhereInput
}
