import { registerEnumType } from '@nestjs/graphql'

export enum TenantScalarFieldEnum {
  id = 'id',
  name = 'name',
  dobName = 'dobName',
  taxId = 'taxId',
  email = 'email',
  phone = 'phone',
  mobilePhone = 'mobilePhone',
  contactPrefix = 'contactPrefix',
  contactFirstName = 'contactFirstName',
  contactMiddleName = 'contactMiddleName',
  contactLastName = 'contactLastName',
  brandUrl = 'brandUrl',
  ownerUserId = 'ownerUserId',
  countryCode = 'countryCode',
  currencyCode = 'currencyCode',
  locale = 'locale',
  isActive = 'isActive',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt'
}

registerEnumType(TenantScalarFieldEnum, {
  name: 'TenantScalarFieldEnum',
  description: undefined
})
