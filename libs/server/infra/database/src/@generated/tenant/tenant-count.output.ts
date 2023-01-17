import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class TenantCount {
  @Field(() => Int, { nullable: false })
  Account?: number
}
