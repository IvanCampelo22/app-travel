import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantWhereUniqueInput } from './tenant-where-unique.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutAccountInput } from './tenant-create-without-account.input';

@InputType()
export class TenantCreateOrConnectWithoutAccountInput {

    @Field(() => TenantWhereUniqueInput, {nullable:false})
    @Type(() => TenantWhereUniqueInput)
    where!: TenantWhereUniqueInput;

    @Field(() => TenantCreateWithoutAccountInput, {nullable:false})
    @Type(() => TenantCreateWithoutAccountInput)
    create!: TenantCreateWithoutAccountInput;
}
