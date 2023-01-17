import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { AccountOrderByRelationAggregateInput } from '../account/account-order-by-relation-aggregate.input'

@InputType()
export class TenantOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  dobName?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  taxId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  phone?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  mobilePhone?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  contactPrefix?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  contactFirstName?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  contactMiddleName?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  contactLastName?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  brandUrl?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  ownerUserId?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  countryCode?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  currencyCode?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  locale?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  isActive?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder

  @Field(() => AccountOrderByRelationAggregateInput, { nullable: true })
  Account?: AccountOrderByRelationAggregateInput
}
