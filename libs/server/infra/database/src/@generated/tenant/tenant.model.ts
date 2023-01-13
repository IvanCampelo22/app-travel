import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Account } from '../account/account.model';
import { TenantCount } from './tenant-count.output';

@ObjectType()
export class Tenant {

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

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    mobilePhone!: string | null;

    @Field(() => String, {nullable:true})
    contactPrefix!: string | null;

    @Field(() => String, {nullable:true})
    contactFirstName!: string | null;

    @Field(() => String, {nullable:true})
    contactMiddleName!: string | null;

    @Field(() => String, {nullable:true})
    contactLastName!: string | null;

    @Field(() => String, {nullable:true})
    brandUrl!: string | null;

    @Field(() => String, {nullable:true})
    ownerUserId!: string | null;

    @Field(() => String, {nullable:true})
    countryCode!: string | null;

    @Field(() => String, {nullable:true})
    currencyCode!: string | null;

    @Field(() => String, {nullable:true})
    locale!: string | null;

    @Field(() => Boolean, {nullable:true,defaultValue:true})
    isActive!: boolean | null;

    /**
     * @zod.custom.omit([model, input])
     */
    @Field(() => Date, {nullable:true,description:'@zod.custom.omit([model, input])'})
    createdAt!: Date | null;

    /**
     * @zod.custom.omit([model, input])
     */
    @Field(() => Date, {nullable:true,description:'@zod.custom.omit([model, input])'})
    updatedAt!: Date | null;

    @Field(() => [Account], {nullable:true})
    Account?: Array<Account>;

    @Field(() => TenantCount, {nullable:false})
    _count?: TenantCount;
}
