import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class AccountCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: bigint | number

  @Field(() => String, { nullable: false })
  name!: string

  @Field(() => String, { nullable: true })
  dobName?: string

  @Field(() => String, { nullable: true })
  taxId?: string

  @Field(() => String, { nullable: false })
  email!: string

  @Field(() => String, { nullable: false })
  tenantId!: bigint | number
}
