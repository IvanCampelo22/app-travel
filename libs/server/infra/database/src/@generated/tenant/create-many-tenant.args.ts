import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { TenantCreateManyInput } from './tenant-create-many.input'
import { Type } from 'class-transformer'

@ArgsType()
export class CreateManyTenantArgs {
  @Field(() => [TenantCreateManyInput], { nullable: false })
  @Type(() => TenantCreateManyInput)
  data!: Array<TenantCreateManyInput>

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean
}
