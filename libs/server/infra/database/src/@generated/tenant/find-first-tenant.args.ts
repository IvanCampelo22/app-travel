import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TenantWhereInput } from './tenant-where.input'
import { Type } from 'class-transformer'
import { TenantOrderByWithRelationInput } from './tenant-order-by-with-relation.input'
import { TenantWhereUniqueInput } from './tenant-where-unique.input'
import { Int } from '@nestjs/graphql'
import { TenantScalarFieldEnum } from './tenant-scalar-field.enum'

@ArgsType()
export class FindFirstTenantArgs {
  @Field(() => TenantWhereInput, { nullable: true })
  @Type(() => TenantWhereInput)
  where?: TenantWhereInput

  @Field(() => [TenantOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TenantOrderByWithRelationInput>

  @Field(() => TenantWhereUniqueInput, { nullable: true })
  cursor?: TenantWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [TenantScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TenantScalarFieldEnum>
}
