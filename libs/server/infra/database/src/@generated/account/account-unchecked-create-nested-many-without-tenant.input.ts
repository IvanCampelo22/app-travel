import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutTenantInput } from './account-create-without-tenant.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutTenantInput } from './account-create-or-connect-without-tenant.input';
import { AccountCreateManyTenantInputEnvelope } from './account-create-many-tenant-input-envelope.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';

@InputType()
export class AccountUncheckedCreateNestedManyWithoutTenantInput {

    @Field(() => [AccountCreateWithoutTenantInput], {nullable:true})
    @Type(() => AccountCreateWithoutTenantInput)
    create?: Array<AccountCreateWithoutTenantInput>;

    @Field(() => [AccountCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutTenantInput>;

    @Field(() => AccountCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyTenantInputEnvelope)
    createMany?: AccountCreateManyTenantInputEnvelope;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;
}
