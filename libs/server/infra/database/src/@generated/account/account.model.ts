import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Tenant } from '../tenant/tenant.model';

@ObjectType()
export class Account {

    @Field(() => ID, {nullable:false})
    id!: bigint;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    dobName!: string | null;

    @Field(() => String, {nullable:true})
    taxId!: string | null;

    /**
     * @zod.string.email()
     */
    @Field(() => String, {nullable:false,description:'@zod.string.email()'})
    email!: string;

    @Field(() => Tenant, {nullable:false})
    tenant?: Tenant;

    @Field(() => String, {nullable:false})
    tenantId!: bigint;
}
