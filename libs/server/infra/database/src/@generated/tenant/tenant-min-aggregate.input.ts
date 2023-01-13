import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TenantMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    dobName?: true;

    @Field(() => Boolean, {nullable:true})
    taxId?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    phone?: true;

    @Field(() => Boolean, {nullable:true})
    mobilePhone?: true;

    @Field(() => Boolean, {nullable:true})
    contactPrefix?: true;

    @Field(() => Boolean, {nullable:true})
    contactFirstName?: true;

    @Field(() => Boolean, {nullable:true})
    contactMiddleName?: true;

    @Field(() => Boolean, {nullable:true})
    contactLastName?: true;

    @Field(() => Boolean, {nullable:true})
    brandUrl?: true;

    @Field(() => Boolean, {nullable:true})
    ownerUserId?: true;

    @Field(() => Boolean, {nullable:true})
    countryCode?: true;

    @Field(() => Boolean, {nullable:true})
    currencyCode?: true;

    @Field(() => Boolean, {nullable:true})
    locale?: true;

    @Field(() => Boolean, {nullable:true})
    isActive?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
