import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TenantWhereUniqueInput } from './tenant-where-unique.input'
import { Type } from 'class-transformer'

@ArgsType()
export class FindUniqueTenantOrThrowArgs {
  @Field(() => TenantWhereUniqueInput, { nullable: false })
  @Type(() => TenantWhereUniqueInput)
  where!: TenantWhereUniqueInput
}
