import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TenantCountAggregate } from './tenant-count-aggregate.output';
import { TenantAvgAggregate } from './tenant-avg-aggregate.output';
import { TenantSumAggregate } from './tenant-sum-aggregate.output';
import { TenantMinAggregate } from './tenant-min-aggregate.output';
import { TenantMaxAggregate } from './tenant-max-aggregate.output';

@ObjectType()
export class AggregateTenant {

    @Field(() => TenantCountAggregate, {nullable:true})
    _count?: TenantCountAggregate;

    @Field(() => TenantAvgAggregate, {nullable:true})
    _avg?: TenantAvgAggregate;

    @Field(() => TenantSumAggregate, {nullable:true})
    _sum?: TenantSumAggregate;

    @Field(() => TenantMinAggregate, {nullable:true})
    _min?: TenantMinAggregate;

    @Field(() => TenantMaxAggregate, {nullable:true})
    _max?: TenantMaxAggregate;
}
