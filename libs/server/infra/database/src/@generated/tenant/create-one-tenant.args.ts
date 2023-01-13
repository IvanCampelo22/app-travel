import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TenantCreateInput } from './tenant-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTenantArgs {

    @Field(() => TenantCreateInput, {nullable:false})
    @Type(() => TenantCreateInput)
    data!: TenantCreateInput;
}
