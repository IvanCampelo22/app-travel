import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TenantUpdateWithoutAccountInput } from './tenant-update-without-account.input';
import { Type } from 'class-transformer';
import { TenantCreateWithoutAccountInput } from './tenant-create-without-account.input';

@InputType()
export class TenantUpsertWithoutAccountInput {

    @Field(() => TenantUpdateWithoutAccountInput, {nullable:false})
    @Type(() => TenantUpdateWithoutAccountInput)
    update!: TenantUpdateWithoutAccountInput;

    @Field(() => TenantCreateWithoutAccountInput, {nullable:false})
    @Type(() => TenantCreateWithoutAccountInput)
    create!: TenantCreateWithoutAccountInput;
}
