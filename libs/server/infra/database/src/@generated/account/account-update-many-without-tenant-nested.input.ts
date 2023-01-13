import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccountCreateWithoutTenantInput } from './account-create-without-tenant.input';
import { Type } from 'class-transformer';
import { AccountCreateOrConnectWithoutTenantInput } from './account-create-or-connect-without-tenant.input';
import { AccountUpsertWithWhereUniqueWithoutTenantInput } from './account-upsert-with-where-unique-without-tenant.input';
import { AccountCreateManyTenantInputEnvelope } from './account-create-many-tenant-input-envelope.input';
import { AccountWhereUniqueInput } from './account-where-unique.input';
import { AccountUpdateWithWhereUniqueWithoutTenantInput } from './account-update-with-where-unique-without-tenant.input';
import { AccountUpdateManyWithWhereWithoutTenantInput } from './account-update-many-with-where-without-tenant.input';
import { AccountScalarWhereInput } from './account-scalar-where.input';

@InputType()
export class AccountUpdateManyWithoutTenantNestedInput {

    @Field(() => [AccountCreateWithoutTenantInput], {nullable:true})
    @Type(() => AccountCreateWithoutTenantInput)
    create?: Array<AccountCreateWithoutTenantInput>;

    @Field(() => [AccountCreateOrConnectWithoutTenantInput], {nullable:true})
    @Type(() => AccountCreateOrConnectWithoutTenantInput)
    connectOrCreate?: Array<AccountCreateOrConnectWithoutTenantInput>;

    @Field(() => [AccountUpsertWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => AccountUpsertWithWhereUniqueWithoutTenantInput)
    upsert?: Array<AccountUpsertWithWhereUniqueWithoutTenantInput>;

    @Field(() => AccountCreateManyTenantInputEnvelope, {nullable:true})
    @Type(() => AccountCreateManyTenantInputEnvelope)
    createMany?: AccountCreateManyTenantInputEnvelope;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    set?: Array<AccountWhereUniqueInput>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    disconnect?: Array<AccountWhereUniqueInput>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    delete?: Array<AccountWhereUniqueInput>;

    @Field(() => [AccountWhereUniqueInput], {nullable:true})
    @Type(() => AccountWhereUniqueInput)
    connect?: Array<AccountWhereUniqueInput>;

    @Field(() => [AccountUpdateWithWhereUniqueWithoutTenantInput], {nullable:true})
    @Type(() => AccountUpdateWithWhereUniqueWithoutTenantInput)
    update?: Array<AccountUpdateWithWhereUniqueWithoutTenantInput>;

    @Field(() => [AccountUpdateManyWithWhereWithoutTenantInput], {nullable:true})
    @Type(() => AccountUpdateManyWithWhereWithoutTenantInput)
    updateMany?: Array<AccountUpdateManyWithWhereWithoutTenantInput>;

    @Field(() => [AccountScalarWhereInput], {nullable:true})
    @Type(() => AccountScalarWhereInput)
    deleteMany?: Array<AccountScalarWhereInput>;
}
