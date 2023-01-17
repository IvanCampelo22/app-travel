import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class AccountMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true

  @Field(() => Boolean, { nullable: true })
  name?: true

  @Field(() => Boolean, { nullable: true })
  dobName?: true

  @Field(() => Boolean, { nullable: true })
  taxId?: true

  @Field(() => Boolean, { nullable: true })
  email?: true

  @Field(() => Boolean, { nullable: true })
  tenantId?: true
}
