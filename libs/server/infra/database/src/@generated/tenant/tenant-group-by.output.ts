import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { TenantCountAggregate } from './tenant-count-aggregate.output'
import { TenantAvgAggregate } from './tenant-avg-aggregate.output'
import { TenantSumAggregate } from './tenant-sum-aggregate.output'
import { TenantMinAggregate } from './tenant-min-aggregate.output'
import { TenantMaxAggregate } from './tenant-max-aggregate.output'

@ObjectType()
export class TenantGroupBy {
  @Field(() => String, { nullable: false })
  id!: bigint | number

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: true })
  dobName?: string

  @Field(() => String, { nullable: true })
  taxId?: string

  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => String, { nullable: true })
  phone?: string

  @Field(() => String, { nullable: true })
  mobilePhone?: string

  @Field(() => String, { nullable: true })
  contactPrefix?: string

  @Field(() => String, { nullable: true })
  contactFirstName?: string

  @Field(() => String, { nullable: true })
  contactMiddleName?: string

  @Field(() => String, { nullable: true })
  contactLastName?: string

  @Field(() => String, { nullable: true })
  brandUrl?: string

  @Field(() => String, { nullable: true })
  ownerUserId?: string

  @Field(() => String, { nullable: true })
  countryCode?: string

  @Field(() => String, { nullable: true })
  currencyCode?: string

  @Field(() => String, { nullable: true })
  locale?: string

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string

  @Field(() => TenantCountAggregate, { nullable: true })
  _count?: TenantCountAggregate

  @Field(() => TenantAvgAggregate, { nullable: true })
  _avg?: TenantAvgAggregate

  @Field(() => TenantSumAggregate, { nullable: true })
  _sum?: TenantSumAggregate

  @Field(() => TenantMinAggregate, { nullable: true })
  _min?: TenantMinAggregate

  @Field(() => TenantMaxAggregate, { nullable: true })
  _max?: TenantMaxAggregate
}
