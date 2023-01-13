import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TenantCountOrderByAggregateInput } from './tenant-count-order-by-aggregate.input';
import { TenantAvgOrderByAggregateInput } from './tenant-avg-order-by-aggregate.input';
import { TenantMaxOrderByAggregateInput } from './tenant-max-order-by-aggregate.input';
import { TenantMinOrderByAggregateInput } from './tenant-min-order-by-aggregate.input';
import { TenantSumOrderByAggregateInput } from './tenant-sum-order-by-aggregate.input';

@InputType()
export class TenantOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dobName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    taxId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobilePhone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contactPrefix?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contactFirstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contactMiddleName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    contactLastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandUrl?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerUserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currencyCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locale?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isActive?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => TenantCountOrderByAggregateInput, {nullable:true})
    _count?: TenantCountOrderByAggregateInput;

    @Field(() => TenantAvgOrderByAggregateInput, {nullable:true})
    _avg?: TenantAvgOrderByAggregateInput;

    @Field(() => TenantMaxOrderByAggregateInput, {nullable:true})
    _max?: TenantMaxOrderByAggregateInput;

    @Field(() => TenantMinOrderByAggregateInput, {nullable:true})
    _min?: TenantMinOrderByAggregateInput;

    @Field(() => TenantSumOrderByAggregateInput, {nullable:true})
    _sum?: TenantSumOrderByAggregateInput;
}
