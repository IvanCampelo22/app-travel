import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { Type } from 'class-transformer';
import { AccountUpdateWithoutTenantInput } from './account-update-without-tenant.input';
import { AccountCreateWithoutTenantInput } from './account-create-without-tenant.input';

@InputType()
export class AccountUpsertWithWhereUniqueWithoutTenantInput {

    @Field(() => AccountWhereUniqueInput, {nullable:false})
    @Type(() => AccountWhereUniqueInput)
    where!: AccountWhereUniqueInput;

    @Field(() => AccountUpdateWithoutTenantInput, {nullable:false})
    @Type(() => AccountUpdateWithoutTenantInput)
    update!: AccountUpdateWithoutTenantInput;

    @Field(() => AccountCreateWithoutTenantInput, {nullable:false})
    @Type(() => AccountCreateWithoutTenantInput)
    create!: AccountCreateWithoutTenantInput;
}
