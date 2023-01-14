import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class AccountCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number

  @Field(() => Int, { nullable: false })
  name!: number

  @Field(() => Int, { nullable: false })
  dobName!: number

  @Field(() => Int, { nullable: false })
  taxId!: number

  @Field(() => Int, { nullable: false })
  email!: number

  @Field(() => Int, { nullable: false })
  tenantId!: number

  @Field(() => Int, { nullable: false })
  _all!: number
}
