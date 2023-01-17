import { registerEnumType } from '@nestjs/graphql'

export enum AccountScalarFieldEnum {
  id = 'id',
  name = 'name',
  dobName = 'dobName',
  taxId = 'taxId',
  email = 'email',
  tenantId = 'tenantId'
}

registerEnumType(AccountScalarFieldEnum, {
  name: 'AccountScalarFieldEnum',
  description: undefined
})
