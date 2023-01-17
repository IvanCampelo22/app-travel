import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AccountSumAggregate {
  @Field(() => String, { nullable: true })
  id?: bigint | number

  @Field(() => String, { nullable: true })
  tenantId?: bigint | number
}
