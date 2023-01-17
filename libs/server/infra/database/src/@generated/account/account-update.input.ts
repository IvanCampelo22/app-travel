import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BigIntFieldUpdateOperationsInput } from '../prisma/big-int-field-update-operations.input'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { TenantUpdateOneRequiredWithoutAccountNestedInput } from '../tenant/tenant-update-one-required-without-account-nested.input'

@InputType()
export class AccountUpdateInput {
  @Field(() => BigIntFieldUpdateOperationsInput, { nullable: true })
  id?: BigIntFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  dobName?: NullableStringFieldUpdateOperationsInput

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  taxId?: NullableStringFieldUpdateOperationsInput

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput

  @Field(() => TenantUpdateOneRequiredWithoutAccountNestedInput, {
    nullable: true
  })
  tenant?: TenantUpdateOneRequiredWithoutAccountNestedInput
}
