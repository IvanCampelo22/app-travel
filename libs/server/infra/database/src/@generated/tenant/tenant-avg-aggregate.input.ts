import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TenantAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;
}
