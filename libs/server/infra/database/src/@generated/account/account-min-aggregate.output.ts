import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AccountMinAggregate {
  @Field(() => String, { nullable: true })
  id?: bigint | number

  @Field(() => String, { nullable: true })
  name?: string

  @Field(() => String, { nullable: true })
  dobName?: string

  @Field(() => String, { nullable: true })
  taxId?: string

  @Field(() => String, { nullable: true })
  email?: string

  @Field(() => String, { nullable: true })
  tenantId?: bigint | number
}
