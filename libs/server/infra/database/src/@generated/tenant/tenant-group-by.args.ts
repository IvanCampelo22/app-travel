import { ArgsType, Field, Int } from '@nestjs/graphql'
import { Type } from 'class-transformer'
import { TenantAvgAggregateInput } from './tenant-avg-aggregate.input'
import { TenantCountAggregateInput } from './tenant-count-aggregate.input'
import { TenantMaxAggregateInput } from './tenant-max-aggregate.input'
import { TenantMinAggregateInput } from './tenant-min-aggregate.input'
import { TenantOrderByWithAggregationInput } from './tenant-order-by-with-aggregation.input'
import { TenantScalarFieldEnum } from './tenant-scalar-field.enum'
import { TenantScalarWhereWithAggregatesInput } from './tenant-scalar-where-with-aggregates.input'
import { TenantSumAggregateInput } from './tenant-sum-aggregate.input'
import { TenantWhereInput } from './tenant-where.input'

@ArgsType()
export class TenantGroupByArgs {
  @Field(() => TenantWhereInput, { nullable: true })
  @Type(() => TenantWhereInput)
  where?: TenantWhereInput

  @Field(() => [TenantOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<TenantOrderByWithAggregationInput>

  @Field(() => [TenantScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof TenantScalarFieldEnum>

  @Field(() => TenantScalarWhereWithAggregatesInput, { nullable: true })
  having?: TenantScalarWhereWithAggregatesInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => TenantCountAggregateInput, { nullable: true })
  _count?: TenantCountAggregateInput

  @Field(() => TenantAvgAggregateInput, { nullable: true })
  _avg?: TenantAvgAggregateInput

  @Field(() => TenantSumAggregateInput, { nullable: true })
  _sum?: TenantSumAggregateInput

  @Field(() => TenantMinAggregateInput, { nullable: true })
  _min?: TenantMinAggregateInput

  @Field(() => TenantMaxAggregateInput, { nullable: true })
  _max?: TenantMaxAggregateInput
}
