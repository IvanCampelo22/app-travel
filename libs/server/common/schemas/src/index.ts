import { z } from 'zod'
import * as PrismaClient from '@prisma/client'

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

// PRISMA GENERATED ENUMS
//------------------------------------------------------

export const AccountScalarFieldEnumSchema = z.nativeEnum(
  PrismaClient.Prisma.AccountScalarFieldEnum
)

export const QueryModeSchema = z.nativeEnum(PrismaClient.Prisma.QueryMode)

export const SortOrderSchema = z.nativeEnum(PrismaClient.Prisma.SortOrder)

export const TenantScalarFieldEnumSchema = z.nativeEnum(
  PrismaClient.Prisma.TenantScalarFieldEnum
)

export const TransactionIsolationLevelSchema = z.nativeEnum(
  PrismaClient.Prisma.TransactionIsolationLevel
)

// CUSTOM ENUMS
//------------------------------------------------------

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

// TENANT
//------------------------------------------------------

export const TenantSchema = z.object({
  id: z.bigint(),
  name: z.string(),
  dobName: z.string().nullish(),
  taxId: z.string().nullish(),
  email: z.string().email(),
  phone: z.string().nullish(),
  mobilePhone: z.string().nullish(),
  contactPrefix: z.string().nullish(),
  contactFirstName: z.string().nullish(),
  contactMiddleName: z.string().nullish(),
  contactLastName: z.string().nullish(),
  brandUrl: z.string().nullish(),
  ownerUserId: z.string().nullish(),
  countryCode: z.string().nullish(),
  currencyCode: z.string().nullish(),
  locale: z.string().nullish(),
  isActive: z.boolean().nullish()
  // omitted: createdAt: z.date().nullish(),
  // omitted: updatedAt: z.date().nullish(),
})

// ACCOUNT
//------------------------------------------------------

export const AccountSchema = z.object({
  id: z.bigint(),
  name: z.string(),
  dobName: z.string().nullish(),
  taxId: z.string().nullish(),
  email: z.string().email(),
  isActive: z.boolean().nullish(),
  tenantId: z.bigint()
})

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// TENANT
//------------------------------------------------------

export const TenantArgsSchema: z.ZodType<PrismaClient.Prisma.TenantArgs> = z
  .object({
    select: z.lazy(() => TenantSelectSchema).optional(),
    include: z.lazy(() => TenantIncludeSchema).optional()
  })
  .strict()

export const TenantIncludeSchema: z.ZodType<PrismaClient.Prisma.TenantInclude> =
  z
    .object({
      Account: z
        .union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)])
        .optional(),
      _count: z
        .union([z.boolean(), z.lazy(() => TenantCountOutputTypeArgsSchema)])
        .optional()
    })
    .strict()

export const TenantCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.TenantCountOutputTypeArgs> =
  z
    .object({
      select: z.lazy(() => TenantCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export const TenantCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.TenantCountOutputTypeSelect> =
  z
    .object({
      Account: z.boolean().optional()
    })
    .strict()

export const TenantSelectSchema: z.ZodType<PrismaClient.Prisma.TenantSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    dobName: z.boolean().optional(),
    taxId: z.boolean().optional(),
    email: z.boolean().optional(),
    phone: z.boolean().optional(),
    mobilePhone: z.boolean().optional(),
    contactPrefix: z.boolean().optional(),
    contactFirstName: z.boolean().optional(),
    contactMiddleName: z.boolean().optional(),
    contactLastName: z.boolean().optional(),
    brandUrl: z.boolean().optional(),
    ownerUserId: z.boolean().optional(),
    countryCode: z.boolean().optional(),
    currencyCode: z.boolean().optional(),
    locale: z.boolean().optional(),
    isActive: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    Account: z
      .union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => TenantCountOutputTypeArgsSchema)])
      .optional()
  })
  .strict()

// ACCOUNT
//------------------------------------------------------

export const AccountArgsSchema: z.ZodType<PrismaClient.Prisma.AccountArgs> = z
  .object({
    select: z.lazy(() => AccountSelectSchema).optional(),
    include: z.lazy(() => AccountIncludeSchema).optional()
  })
  .strict()

export const AccountIncludeSchema: z.ZodType<PrismaClient.Prisma.AccountInclude> =
  z
    .object({
      tenant: z.union([z.boolean(), z.lazy(() => TenantArgsSchema)]).optional()
    })
    .strict()

export const AccountSelectSchema: z.ZodType<PrismaClient.Prisma.AccountSelect> =
  z
    .object({
      id: z.boolean().optional(),
      name: z.boolean().optional(),
      dobName: z.boolean().optional(),
      taxId: z.boolean().optional(),
      email: z.boolean().optional(),
      isActive: z.boolean().optional(),
      tenant: z.union([z.boolean(), z.lazy(() => TenantArgsSchema)]).optional(),
      tenantId: z.boolean().optional()
    })
    .strict()

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const TenantWhereInputSchema: z.ZodType<PrismaClient.Prisma.TenantWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TenantWhereInputSchema),
          z.lazy(() => TenantWhereInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => TenantWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TenantWhereInputSchema),
          z.lazy(() => TenantWhereInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      dobName: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      taxId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      phone: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      mobilePhone: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      contactPrefix: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      contactFirstName: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      contactMiddleName: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      contactLastName: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      brandUrl: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      ownerUserId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      countryCode: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      currencyCode: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      locale: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      isActive: z
        .union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.date()])
        .optional()
        .nullable(),
      updatedAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.date()])
        .optional()
        .nullable(),
      Account: z.lazy(() => AccountListRelationFilterSchema).optional()
    })
    .strict()

export const TenantOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.TenantOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      dobName: z.lazy(() => SortOrderSchema).optional(),
      taxId: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      mobilePhone: z.lazy(() => SortOrderSchema).optional(),
      contactPrefix: z.lazy(() => SortOrderSchema).optional(),
      contactFirstName: z.lazy(() => SortOrderSchema).optional(),
      contactMiddleName: z.lazy(() => SortOrderSchema).optional(),
      contactLastName: z.lazy(() => SortOrderSchema).optional(),
      brandUrl: z.lazy(() => SortOrderSchema).optional(),
      ownerUserId: z.lazy(() => SortOrderSchema).optional(),
      countryCode: z.lazy(() => SortOrderSchema).optional(),
      currencyCode: z.lazy(() => SortOrderSchema).optional(),
      locale: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      Account: z
        .lazy(() => AccountOrderByRelationAggregateInputSchema)
        .optional()
    })
    .strict()

export const TenantWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.TenantWhereUniqueInput> =
  z
    .object({
      id: z.bigint().optional()
    })
    .strict()

export const TenantOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.TenantOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      dobName: z.lazy(() => SortOrderSchema).optional(),
      taxId: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      mobilePhone: z.lazy(() => SortOrderSchema).optional(),
      contactPrefix: z.lazy(() => SortOrderSchema).optional(),
      contactFirstName: z.lazy(() => SortOrderSchema).optional(),
      contactMiddleName: z.lazy(() => SortOrderSchema).optional(),
      contactLastName: z.lazy(() => SortOrderSchema).optional(),
      brandUrl: z.lazy(() => SortOrderSchema).optional(),
      ownerUserId: z.lazy(() => SortOrderSchema).optional(),
      countryCode: z.lazy(() => SortOrderSchema).optional(),
      currencyCode: z.lazy(() => SortOrderSchema).optional(),
      locale: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => TenantCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => TenantAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => TenantMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => TenantMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => TenantSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export const TenantScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.TenantScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => TenantScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TenantScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => TenantScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => TenantScalarWhereWithAggregatesInputSchema),
          z.lazy(() => TenantScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z
        .union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      dobName: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      taxId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      email: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      phone: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      mobilePhone: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      contactPrefix: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      contactFirstName: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      contactMiddleName: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      contactLastName: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      brandUrl: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      ownerUserId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      countryCode: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      currencyCode: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      locale: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      isActive: z
        .union([
          z.lazy(() => BoolNullableWithAggregatesFilterSchema),
          z.boolean()
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.date()
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.date()
        ])
        .optional()
        .nullable()
    })
    .strict()

export const AccountWhereInputSchema: z.ZodType<PrismaClient.Prisma.AccountWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AccountWhereInputSchema),
          z.lazy(() => AccountWhereInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => AccountWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AccountWhereInputSchema),
          z.lazy(() => AccountWhereInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      dobName: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      taxId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      isActive: z
        .union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
        .optional()
        .nullable(),
      tenant: z
        .union([
          z.lazy(() => TenantRelationFilterSchema),
          z.lazy(() => TenantWhereInputSchema)
        ])
        .optional(),
      tenantId: z
        .union([z.lazy(() => BigIntFilterSchema), z.bigint()])
        .optional()
    })
    .strict()

export const AccountOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      dobName: z.lazy(() => SortOrderSchema).optional(),
      taxId: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      tenant: z.lazy(() => TenantOrderByWithRelationInputSchema).optional(),
      tenantId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const AccountWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.AccountWhereUniqueInput> =
  z
    .object({
      id: z.bigint().optional()
    })
    .strict()

export const AccountOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      dobName: z.lazy(() => SortOrderSchema).optional(),
      taxId: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      tenantId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
    })
    .strict()

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.AccountScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => AccountScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array()
        ])
        .optional(),
      id: z
        .union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      dobName: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      taxId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string()
        ])
        .optional()
        .nullable(),
      email: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      isActive: z
        .union([
          z.lazy(() => BoolNullableWithAggregatesFilterSchema),
          z.boolean()
        ])
        .optional()
        .nullable(),
      tenantId: z
        .union([z.lazy(() => BigIntWithAggregatesFilterSchema), z.bigint()])
        .optional()
    })
    .strict()

export const TenantCreateInputSchema: z.ZodType<
  Omit<PrismaClient.Prisma.TenantCreateInput, 'createdAt' | 'updatedAt'>
> = z
  .object({
    id: z.bigint().optional(),
    name: z.string(),
    dobName: z.string().optional().nullable(),
    taxId: z.string().optional().nullable(),
    email: z.string().email(),
    phone: z.string().optional().nullable(),
    mobilePhone: z.string().optional().nullable(),
    contactPrefix: z.string().optional().nullable(),
    contactFirstName: z.string().optional().nullable(),
    contactMiddleName: z.string().optional().nullable(),
    contactLastName: z.string().optional().nullable(),
    brandUrl: z.string().optional().nullable(),
    ownerUserId: z.string().optional().nullable(),
    countryCode: z.string().optional().nullable(),
    currencyCode: z.string().optional().nullable(),
    locale: z.string().optional().nullable(),
    isActive: z.boolean().optional().nullable(),
    // omitted: createdAt: z.date().optional().nullable(),
    // omitted: updatedAt: z.date().optional().nullable(),
    Account: z
      .lazy(() => AccountCreateNestedManyWithoutTenantInputSchema)
      .optional()
  })
  .strict()

export const TenantUncheckedCreateInputSchema: z.ZodType<
  Omit<
    PrismaClient.Prisma.TenantUncheckedCreateInput,
    'createdAt' | 'updatedAt'
  >
> = z
  .object({
    id: z.bigint().optional(),
    name: z.string(),
    dobName: z.string().optional().nullable(),
    taxId: z.string().optional().nullable(),
    email: z.string().email(),
    phone: z.string().optional().nullable(),
    mobilePhone: z.string().optional().nullable(),
    contactPrefix: z.string().optional().nullable(),
    contactFirstName: z.string().optional().nullable(),
    contactMiddleName: z.string().optional().nullable(),
    contactLastName: z.string().optional().nullable(),
    brandUrl: z.string().optional().nullable(),
    ownerUserId: z.string().optional().nullable(),
    countryCode: z.string().optional().nullable(),
    currencyCode: z.string().optional().nullable(),
    locale: z.string().optional().nullable(),
    isActive: z.boolean().optional().nullable(),
    // omitted: createdAt: z.date().optional().nullable(),
    // omitted: updatedAt: z.date().optional().nullable(),
    Account: z
      .lazy(() => AccountUncheckedCreateNestedManyWithoutTenantInputSchema)
      .optional()
  })
  .strict()

export const TenantUpdateInputSchema: z.ZodType<
  Omit<PrismaClient.Prisma.TenantUpdateInput, 'createdAt' | 'updatedAt'>
> = z
  .object({
    id: z
      .union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    dobName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    taxId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string().email(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
      ])
      .optional(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    mobilePhone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactPrefix: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactFirstName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactMiddleName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactLastName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    brandUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    ownerUserId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    countryCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    currencyCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    locale: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    isActive: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    // omitted: createdAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
    // omitted: updatedAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
    Account: z
      .lazy(() => AccountUpdateManyWithoutTenantNestedInputSchema)
      .optional()
  })
  .strict()

export const TenantUncheckedUpdateInputSchema: z.ZodType<
  Omit<
    PrismaClient.Prisma.TenantUncheckedUpdateInput,
    'createdAt' | 'updatedAt'
  >
> = z
  .object({
    id: z
      .union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    dobName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    taxId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string().email(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
      ])
      .optional(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    mobilePhone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactPrefix: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactFirstName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactMiddleName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactLastName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    brandUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    ownerUserId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    countryCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    currencyCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    locale: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    isActive: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    // omitted: createdAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
    // omitted: updatedAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
    Account: z
      .lazy(() => AccountUncheckedUpdateManyWithoutTenantNestedInputSchema)
      .optional()
  })
  .strict()

export const TenantCreateManyInputSchema: z.ZodType<
  Omit<PrismaClient.Prisma.TenantCreateManyInput, 'createdAt' | 'updatedAt'>
> = z
  .object({
    id: z.bigint().optional(),
    name: z.string(),
    dobName: z.string().optional().nullable(),
    taxId: z.string().optional().nullable(),
    email: z.string().email(),
    phone: z.string().optional().nullable(),
    mobilePhone: z.string().optional().nullable(),
    contactPrefix: z.string().optional().nullable(),
    contactFirstName: z.string().optional().nullable(),
    contactMiddleName: z.string().optional().nullable(),
    contactLastName: z.string().optional().nullable(),
    brandUrl: z.string().optional().nullable(),
    ownerUserId: z.string().optional().nullable(),
    countryCode: z.string().optional().nullable(),
    currencyCode: z.string().optional().nullable(),
    locale: z.string().optional().nullable(),
    isActive: z.boolean().optional().nullable()
    // omitted: createdAt: z.date().optional().nullable(),
    // omitted: updatedAt: z.date().optional().nullable(),
  })
  .strict()

export const TenantUpdateManyMutationInputSchema: z.ZodType<
  Omit<
    PrismaClient.Prisma.TenantUpdateManyMutationInput,
    'createdAt' | 'updatedAt'
  >
> = z
  .object({
    id: z
      .union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    dobName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    taxId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string().email(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
      ])
      .optional(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    mobilePhone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactPrefix: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactFirstName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactMiddleName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactLastName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    brandUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    ownerUserId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    countryCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    currencyCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    locale: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    isActive: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable()
    // omitted: createdAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
    // omitted: updatedAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  })
  .strict()

export const TenantUncheckedUpdateManyInputSchema: z.ZodType<
  Omit<
    PrismaClient.Prisma.TenantUncheckedUpdateManyInput,
    'createdAt' | 'updatedAt'
  >
> = z
  .object({
    id: z
      .union([z.bigint(), z.lazy(() => BigIntFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    dobName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    taxId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    email: z
      .union([
        z.string().email(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema)
      ])
      .optional(),
    phone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    mobilePhone: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactPrefix: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactFirstName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactMiddleName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    contactLastName: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    brandUrl: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    ownerUserId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    countryCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    currencyCode: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    locale: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable(),
    isActive: z
      .union([
        z.boolean(),
        z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
      ])
      .optional()
      .nullable()
    // omitted: createdAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
    // omitted: updatedAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  })
  .strict()

export const AccountCreateInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateInput> =
  z
    .object({
      id: z.bigint().optional(),
      name: z.string(),
      dobName: z.string().optional().nullable(),
      taxId: z.string().optional().nullable(),
      email: z.string().email(),
      isActive: z.boolean().optional().nullable(),
      tenant: z.lazy(() => TenantCreateNestedOneWithoutAccountInputSchema)
    })
    .strict()

export const AccountUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateInput> =
  z
    .object({
      id: z.bigint().optional(),
      name: z.string(),
      dobName: z.string().optional().nullable(),
      taxId: z.string().optional().nullable(),
      email: z.string().email(),
      isActive: z.boolean().optional().nullable(),
      tenantId: z.bigint()
    })
    .strict()

export const AccountUpdateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      dobName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      taxId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string().email(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      tenant: z
        .lazy(() => TenantUpdateOneRequiredWithoutAccountNestedInputSchema)
        .optional()
    })
    .strict()

export const AccountUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      dobName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      taxId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string().email(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      tenantId: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputSchema)
        ])
        .optional()
    })
    .strict()

export const AccountCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyInput> =
  z
    .object({
      id: z.bigint().optional(),
      name: z.string(),
      dobName: z.string().optional().nullable(),
      taxId: z.string().optional().nullable(),
      email: z.string().email(),
      isActive: z.boolean().optional().nullable(),
      tenantId: z.bigint()
    })
    .strict()

export const AccountUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      dobName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      taxId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string().email(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable()
    })
    .strict()

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      dobName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      taxId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string().email(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      tenantId: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputSchema)
        ])
        .optional()
    })
    .strict()

export const BigIntFilterSchema: z.ZodType<PrismaClient.Prisma.BigIntFilter> = z
  .object({
    equals: z.bigint().optional(),
    in: z.bigint().array().optional(),
    notIn: z.bigint().array().optional(),
    lt: z.bigint().optional(),
    lte: z.bigint().optional(),
    gt: z.bigint().optional(),
    gte: z.bigint().optional(),
    not: z
      .union([z.bigint(), z.lazy(() => NestedBigIntFilterSchema)])
      .optional()
  })
  .strict()

export const StringFilterSchema: z.ZodType<PrismaClient.Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional()
  })
  .strict()

export const StringNullableFilterSchema: z.ZodType<PrismaClient.Prisma.StringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable()
    })
    .strict()

export const BoolNullableFilterSchema: z.ZodType<PrismaClient.Prisma.BoolNullableFilter> =
  z
    .object({
      equals: z.boolean().optional().nullable(),
      not: z
        .union([z.boolean(), z.lazy(() => NestedBoolNullableFilterSchema)])
        .optional()
        .nullable()
    })
    .strict()

export const DateTimeNullableFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeNullableFilter> =
  z
    .object({
      equals: z.date().optional().nullable(),
      in: z.date().array().optional().nullable(),
      notIn: z.date().array().optional().nullable(),
      lt: z.date().optional(),
      lte: z.date().optional(),
      gt: z.date().optional(),
      gte: z.date().optional(),
      not: z
        .union([z.date(), z.lazy(() => NestedDateTimeNullableFilterSchema)])
        .optional()
        .nullable()
    })
    .strict()

export const AccountListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.AccountListRelationFilter> =
  z
    .object({
      every: z.lazy(() => AccountWhereInputSchema).optional(),
      some: z.lazy(() => AccountWhereInputSchema).optional(),
      none: z.lazy(() => AccountWhereInputSchema).optional()
    })
    .strict()

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const TenantCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TenantCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      dobName: z.lazy(() => SortOrderSchema).optional(),
      taxId: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      mobilePhone: z.lazy(() => SortOrderSchema).optional(),
      contactPrefix: z.lazy(() => SortOrderSchema).optional(),
      contactFirstName: z.lazy(() => SortOrderSchema).optional(),
      contactMiddleName: z.lazy(() => SortOrderSchema).optional(),
      contactLastName: z.lazy(() => SortOrderSchema).optional(),
      brandUrl: z.lazy(() => SortOrderSchema).optional(),
      ownerUserId: z.lazy(() => SortOrderSchema).optional(),
      countryCode: z.lazy(() => SortOrderSchema).optional(),
      currencyCode: z.lazy(() => SortOrderSchema).optional(),
      locale: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const TenantAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TenantAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const TenantMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TenantMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      dobName: z.lazy(() => SortOrderSchema).optional(),
      taxId: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      mobilePhone: z.lazy(() => SortOrderSchema).optional(),
      contactPrefix: z.lazy(() => SortOrderSchema).optional(),
      contactFirstName: z.lazy(() => SortOrderSchema).optional(),
      contactMiddleName: z.lazy(() => SortOrderSchema).optional(),
      contactLastName: z.lazy(() => SortOrderSchema).optional(),
      brandUrl: z.lazy(() => SortOrderSchema).optional(),
      ownerUserId: z.lazy(() => SortOrderSchema).optional(),
      countryCode: z.lazy(() => SortOrderSchema).optional(),
      currencyCode: z.lazy(() => SortOrderSchema).optional(),
      locale: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const TenantMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TenantMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      dobName: z.lazy(() => SortOrderSchema).optional(),
      taxId: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      phone: z.lazy(() => SortOrderSchema).optional(),
      mobilePhone: z.lazy(() => SortOrderSchema).optional(),
      contactPrefix: z.lazy(() => SortOrderSchema).optional(),
      contactFirstName: z.lazy(() => SortOrderSchema).optional(),
      contactMiddleName: z.lazy(() => SortOrderSchema).optional(),
      contactLastName: z.lazy(() => SortOrderSchema).optional(),
      brandUrl: z.lazy(() => SortOrderSchema).optional(),
      ownerUserId: z.lazy(() => SortOrderSchema).optional(),
      countryCode: z.lazy(() => SortOrderSchema).optional(),
      currencyCode: z.lazy(() => SortOrderSchema).optional(),
      locale: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const TenantSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.TenantSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const BigIntWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.BigIntWithAggregatesFilter> =
  z
    .object({
      equals: z.bigint().optional(),
      in: z.bigint().array().optional(),
      notIn: z.bigint().array().optional(),
      lt: z.bigint().optional(),
      lte: z.bigint().optional(),
      gt: z.bigint().optional(),
      gte: z.bigint().optional(),
      not: z
        .union([
          z.bigint(),
          z.lazy(() => NestedBigIntWithAggregatesFilterSchema)
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
      _max: z.lazy(() => NestedBigIntFilterSchema).optional()
    })
    .strict()

export const StringWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema)
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional()
    })
    .strict()

export const StringNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.StringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
    })
    .strict()

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.BoolNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional().nullable(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema)
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
    })
    .strict()

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.date().optional().nullable(),
      in: z.date().array().optional().nullable(),
      notIn: z.date().array().optional().nullable(),
      lt: z.date().optional(),
      lte: z.date().optional(),
      gt: z.date().optional(),
      gte: z.date().optional(),
      not: z
        .union([
          z.date(),
          z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema)
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
    })
    .strict()

export const TenantRelationFilterSchema: z.ZodType<PrismaClient.Prisma.TenantRelationFilter> =
  z
    .object({
      is: z.lazy(() => TenantWhereInputSchema).optional(),
      isNot: z.lazy(() => TenantWhereInputSchema).optional()
    })
    .strict()

export const AccountCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      dobName: z.lazy(() => SortOrderSchema).optional(),
      taxId: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      tenantId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      tenantId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      dobName: z.lazy(() => SortOrderSchema).optional(),
      taxId: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      tenantId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const AccountMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      dobName: z.lazy(() => SortOrderSchema).optional(),
      taxId: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      isActive: z.lazy(() => SortOrderSchema).optional(),
      tenantId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const AccountSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      tenantId: z.lazy(() => SortOrderSchema).optional()
    })
    .strict()

export const AccountCreateNestedManyWithoutTenantInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateNestedManyWithoutTenantInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutTenantInputSchema),
          z.lazy(() => AccountCreateWithoutTenantInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutTenantInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutTenantInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutTenantInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutTenantInputSchema).array()
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyTenantInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict()

export const AccountUncheckedCreateNestedManyWithoutTenantInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateNestedManyWithoutTenantInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutTenantInputSchema),
          z.lazy(() => AccountCreateWithoutTenantInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutTenantInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutTenantInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutTenantInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutTenantInputSchema).array()
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyTenantInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array()
        ])
        .optional()
    })
    .strict()

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.BigIntFieldUpdateOperationsInput> =
  z
    .object({
      set: z.bigint().optional(),
      increment: z.bigint().optional(),
      decrement: z.bigint().optional(),
      multiply: z.bigint().optional(),
      divide: z.bigint().optional()
    })
    .strict()

export const StringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional()
    })
    .strict()

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableStringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional().nullable()
    })
    .strict()

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableBoolFieldUpdateOperationsInput> =
  z
    .object({
      set: z.boolean().optional().nullable()
    })
    .strict()

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableDateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.date().optional().nullable()
    })
    .strict()

export const AccountUpdateManyWithoutTenantNestedInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyWithoutTenantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutTenantInputSchema),
          z.lazy(() => AccountCreateWithoutTenantInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutTenantInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutTenantInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutTenantInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutTenantInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => AccountUpsertWithWhereUniqueWithoutTenantInputSchema),
          z
            .lazy(() => AccountUpsertWithWhereUniqueWithoutTenantInputSchema)
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyTenantInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => AccountUpdateWithWhereUniqueWithoutTenantInputSchema),
          z
            .lazy(() => AccountUpdateWithWhereUniqueWithoutTenantInputSchema)
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AccountUpdateManyWithWhereWithoutTenantInputSchema),
          z
            .lazy(() => AccountUpdateManyWithWhereWithoutTenantInputSchema)
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict()

export const AccountUncheckedUpdateManyWithoutTenantNestedInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyWithoutTenantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutTenantInputSchema),
          z.lazy(() => AccountCreateWithoutTenantInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutTenantInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutTenantInputSchema).array()
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutTenantInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutTenantInputSchema).array()
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => AccountUpsertWithWhereUniqueWithoutTenantInputSchema),
          z
            .lazy(() => AccountUpsertWithWhereUniqueWithoutTenantInputSchema)
            .array()
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyTenantInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array()
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array()
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array()
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array()
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => AccountUpdateWithWhereUniqueWithoutTenantInputSchema),
          z
            .lazy(() => AccountUpdateWithWhereUniqueWithoutTenantInputSchema)
            .array()
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AccountUpdateManyWithWhereWithoutTenantInputSchema),
          z
            .lazy(() => AccountUpdateManyWithWhereWithoutTenantInputSchema)
            .array()
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array()
        ])
        .optional()
    })
    .strict()

export const TenantCreateNestedOneWithoutAccountInputSchema: z.ZodType<PrismaClient.Prisma.TenantCreateNestedOneWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantCreateWithoutAccountInputSchema),
          z.lazy(() => TenantUncheckedCreateWithoutAccountInputSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TenantCreateOrConnectWithoutAccountInputSchema)
        .optional(),
      connect: z.lazy(() => TenantWhereUniqueInputSchema).optional()
    })
    .strict()

export const TenantUpdateOneRequiredWithoutAccountNestedInputSchema: z.ZodType<PrismaClient.Prisma.TenantUpdateOneRequiredWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TenantCreateWithoutAccountInputSchema),
          z.lazy(() => TenantUncheckedCreateWithoutAccountInputSchema)
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => TenantCreateOrConnectWithoutAccountInputSchema)
        .optional(),
      upsert: z.lazy(() => TenantUpsertWithoutAccountInputSchema).optional(),
      connect: z.lazy(() => TenantWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => TenantUpdateWithoutAccountInputSchema),
          z.lazy(() => TenantUncheckedUpdateWithoutAccountInputSchema)
        ])
        .optional()
    })
    .strict()

export const NestedBigIntFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBigIntFilter> =
  z
    .object({
      equals: z.bigint().optional(),
      in: z.bigint().array().optional(),
      notIn: z.bigint().array().optional(),
      lt: z.bigint().optional(),
      lte: z.bigint().optional(),
      gt: z.bigint().optional(),
      gte: z.bigint().optional(),
      not: z
        .union([z.bigint(), z.lazy(() => NestedBigIntFilterSchema)])
        .optional()
    })
    .strict()

export const NestedStringFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
        .optional()
    })
    .strict()

export const NestedStringNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable()
    })
    .strict()

export const NestedBoolNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBoolNullableFilter> =
  z
    .object({
      equals: z.boolean().optional().nullable(),
      not: z
        .union([z.boolean(), z.lazy(() => NestedBoolNullableFilterSchema)])
        .optional()
        .nullable()
    })
    .strict()

export const NestedDateTimeNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeNullableFilter> =
  z
    .object({
      equals: z.date().optional().nullable(),
      in: z.date().array().optional().nullable(),
      notIn: z.date().array().optional().nullable(),
      lt: z.date().optional(),
      lte: z.date().optional(),
      gt: z.date().optional(),
      gte: z.date().optional(),
      not: z
        .union([z.date(), z.lazy(() => NestedDateTimeNullableFilterSchema)])
        .optional()
        .nullable()
    })
    .strict()

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBigIntWithAggregatesFilter> =
  z
    .object({
      equals: z.bigint().optional(),
      in: z.bigint().array().optional(),
      notIn: z.bigint().array().optional(),
      lt: z.bigint().optional(),
      lte: z.bigint().optional(),
      gt: z.bigint().optional(),
      gte: z.bigint().optional(),
      not: z
        .union([
          z.bigint(),
          z.lazy(() => NestedBigIntWithAggregatesFilterSchema)
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
      _max: z.lazy(() => NestedBigIntFilterSchema).optional()
    })
    .strict()

export const NestedIntFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional()
    })
    .strict()

export const NestedFloatFilterSchema: z.ZodType<PrismaClient.Prisma.NestedFloatFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
        .optional()
    })
    .strict()

export const NestedStringWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema)
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional()
    })
    .strict()

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
    })
    .strict()

export const NestedIntNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntNullableFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
        .optional()
        .nullable()
    })
    .strict()

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedBoolNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional().nullable(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema)
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
    })
    .strict()

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.date().optional().nullable(),
      in: z.date().array().optional().nullable(),
      notIn: z.date().array().optional().nullable(),
      lt: z.date().optional(),
      lte: z.date().optional(),
      gt: z.date().optional(),
      gte: z.date().optional(),
      not: z
        .union([
          z.date(),
          z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema)
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
    })
    .strict()

export const AccountCreateWithoutTenantInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateWithoutTenantInput> =
  z
    .object({
      id: z.bigint().optional(),
      name: z.string(),
      dobName: z.string().optional().nullable(),
      taxId: z.string().optional().nullable(),
      email: z.string(),
      isActive: z.boolean().optional().nullable()
    })
    .strict()

export const AccountUncheckedCreateWithoutTenantInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateWithoutTenantInput> =
  z
    .object({
      id: z.bigint().optional(),
      name: z.string(),
      dobName: z.string().optional().nullable(),
      taxId: z.string().optional().nullable(),
      email: z.string(),
      isActive: z.boolean().optional().nullable()
    })
    .strict()

export const AccountCreateOrConnectWithoutTenantInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateOrConnectWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AccountCreateWithoutTenantInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutTenantInputSchema)
      ])
    })
    .strict()

export const AccountCreateManyTenantInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyTenantInputEnvelope> =
  z
    .object({
      data: z.lazy(() => AccountCreateManyTenantInputSchema).array(),
      skipDuplicates: z.boolean().optional()
    })
    .strict()

export const AccountUpsertWithWhereUniqueWithoutTenantInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpsertWithWhereUniqueWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => AccountUpdateWithoutTenantInputSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutTenantInputSchema)
      ]),
      create: z.union([
        z.lazy(() => AccountCreateWithoutTenantInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutTenantInputSchema)
      ])
    })
    .strict()

export const AccountUpdateWithWhereUniqueWithoutTenantInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateWithWhereUniqueWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => AccountUpdateWithoutTenantInputSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutTenantInputSchema)
      ])
    })
    .strict()

export const AccountUpdateManyWithWhereWithoutTenantInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyWithWhereWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => AccountScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => AccountUpdateManyMutationInputSchema),
        z.lazy(() => AccountUncheckedUpdateManyWithoutAccountInputSchema)
      ])
    })
    .strict()

export const AccountScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.AccountScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array()
        ])
        .optional(),
      OR: z
        .lazy(() => AccountScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array()
        ])
        .optional(),
      id: z.union([z.lazy(() => BigIntFilterSchema), z.bigint()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      dobName: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      taxId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      isActive: z
        .union([z.lazy(() => BoolNullableFilterSchema), z.boolean()])
        .optional()
        .nullable(),
      tenantId: z
        .union([z.lazy(() => BigIntFilterSchema), z.bigint()])
        .optional()
    })
    .strict()

export const TenantCreateWithoutAccountInputSchema: z.ZodType<PrismaClient.Prisma.TenantCreateWithoutAccountInput> =
  z
    .object({
      id: z.bigint().optional(),
      name: z.string(),
      dobName: z.string().optional().nullable(),
      taxId: z.string().optional().nullable(),
      email: z.string(),
      phone: z.string().optional().nullable(),
      mobilePhone: z.string().optional().nullable(),
      contactPrefix: z.string().optional().nullable(),
      contactFirstName: z.string().optional().nullable(),
      contactMiddleName: z.string().optional().nullable(),
      contactLastName: z.string().optional().nullable(),
      brandUrl: z.string().optional().nullable(),
      ownerUserId: z.string().optional().nullable(),
      countryCode: z.string().optional().nullable(),
      currencyCode: z.string().optional().nullable(),
      locale: z.string().optional().nullable(),
      isActive: z.boolean().optional().nullable(),
      createdAt: z.date().optional().nullable(),
      updatedAt: z.date().optional().nullable()
    })
    .strict()

export const TenantUncheckedCreateWithoutAccountInputSchema: z.ZodType<PrismaClient.Prisma.TenantUncheckedCreateWithoutAccountInput> =
  z
    .object({
      id: z.bigint().optional(),
      name: z.string(),
      dobName: z.string().optional().nullable(),
      taxId: z.string().optional().nullable(),
      email: z.string(),
      phone: z.string().optional().nullable(),
      mobilePhone: z.string().optional().nullable(),
      contactPrefix: z.string().optional().nullable(),
      contactFirstName: z.string().optional().nullable(),
      contactMiddleName: z.string().optional().nullable(),
      contactLastName: z.string().optional().nullable(),
      brandUrl: z.string().optional().nullable(),
      ownerUserId: z.string().optional().nullable(),
      countryCode: z.string().optional().nullable(),
      currencyCode: z.string().optional().nullable(),
      locale: z.string().optional().nullable(),
      isActive: z.boolean().optional().nullable(),
      createdAt: z.date().optional().nullable(),
      updatedAt: z.date().optional().nullable()
    })
    .strict()

export const TenantCreateOrConnectWithoutAccountInputSchema: z.ZodType<PrismaClient.Prisma.TenantCreateOrConnectWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => TenantWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => TenantCreateWithoutAccountInputSchema),
        z.lazy(() => TenantUncheckedCreateWithoutAccountInputSchema)
      ])
    })
    .strict()

export const TenantUpsertWithoutAccountInputSchema: z.ZodType<PrismaClient.Prisma.TenantUpsertWithoutAccountInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => TenantUpdateWithoutAccountInputSchema),
        z.lazy(() => TenantUncheckedUpdateWithoutAccountInputSchema)
      ]),
      create: z.union([
        z.lazy(() => TenantCreateWithoutAccountInputSchema),
        z.lazy(() => TenantUncheckedCreateWithoutAccountInputSchema)
      ])
    })
    .strict()

export const TenantUpdateWithoutAccountInputSchema: z.ZodType<PrismaClient.Prisma.TenantUpdateWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      dobName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      taxId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      mobilePhone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      contactPrefix: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      contactFirstName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      contactMiddleName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      contactLastName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      brandUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      ownerUserId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      countryCode: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      currencyCode: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      locale: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable()
    })
    .strict()

export const TenantUncheckedUpdateWithoutAccountInputSchema: z.ZodType<PrismaClient.Prisma.TenantUncheckedUpdateWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      dobName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      taxId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      phone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      mobilePhone: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      contactPrefix: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      contactFirstName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      contactMiddleName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      contactLastName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      brandUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      ownerUserId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      countryCode: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      currencyCode: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      locale: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable()
    })
    .strict()

export const AccountCreateManyTenantInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyTenantInput> =
  z
    .object({
      id: z.bigint().optional(),
      name: z.string(),
      dobName: z.string().optional().nullable(),
      taxId: z.string().optional().nullable(),
      email: z.string().email(),
      isActive: z.boolean().optional().nullable()
    })
    .strict()

export const AccountUpdateWithoutTenantInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateWithoutTenantInput> =
  z
    .object({
      id: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      dobName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      taxId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable()
    })
    .strict()

export const AccountUncheckedUpdateWithoutTenantInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateWithoutTenantInput> =
  z
    .object({
      id: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      dobName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      taxId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable()
    })
    .strict()

export const AccountUncheckedUpdateManyWithoutAccountInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.bigint(),
          z.lazy(() => BigIntFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      dobName: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      taxId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable(),
      email: z
        .union([
          z.string().email(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema)
        ])
        .optional(),
      isActive: z
        .union([
          z.boolean(),
          z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema)
        ])
        .optional()
        .nullable()
    })
    .strict()

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const TenantFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.TenantFindFirstArgs> =
  z
    .object({
      select: TenantSelectSchema.optional(),
      include: TenantIncludeSchema.optional(),
      where: TenantWhereInputSchema.optional(),
      orderBy: z
        .union([
          TenantOrderByWithRelationInputSchema.array(),
          TenantOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: TenantWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: TenantScalarFieldEnumSchema.array().optional()
    })
    .strict()

export const TenantFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.TenantFindFirstOrThrowArgs> =
  z
    .object({
      select: TenantSelectSchema.optional(),
      include: TenantIncludeSchema.optional(),
      where: TenantWhereInputSchema.optional(),
      orderBy: z
        .union([
          TenantOrderByWithRelationInputSchema.array(),
          TenantOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: TenantWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: TenantScalarFieldEnumSchema.array().optional()
    })
    .strict()

export const TenantFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.TenantFindManyArgs> =
  z
    .object({
      select: TenantSelectSchema.optional(),
      include: TenantIncludeSchema.optional(),
      where: TenantWhereInputSchema.optional(),
      orderBy: z
        .union([
          TenantOrderByWithRelationInputSchema.array(),
          TenantOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: TenantWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: TenantScalarFieldEnumSchema.array().optional()
    })
    .strict()

export const TenantAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.TenantAggregateArgs> =
  z
    .object({
      select: TenantSelectSchema.optional(),
      include: TenantIncludeSchema.optional(),
      where: TenantWhereInputSchema.optional(),
      orderBy: z
        .union([
          TenantOrderByWithRelationInputSchema.array(),
          TenantOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: TenantWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional()
    })
    .strict()

export const TenantGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.TenantGroupByArgs> =
  z
    .object({
      select: TenantSelectSchema.optional(),
      include: TenantIncludeSchema.optional(),
      where: TenantWhereInputSchema.optional(),
      orderBy: z
        .union([
          TenantOrderByWithAggregationInputSchema.array(),
          TenantOrderByWithAggregationInputSchema
        ])
        .optional(),
      by: TenantScalarFieldEnumSchema.array(),
      having: TenantScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional()
    })
    .strict()

export const TenantFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.TenantFindUniqueArgs> =
  z
    .object({
      select: TenantSelectSchema.optional(),
      include: TenantIncludeSchema.optional(),
      where: TenantWhereUniqueInputSchema
    })
    .strict()

export const TenantFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.TenantFindUniqueOrThrowArgs> =
  z
    .object({
      select: TenantSelectSchema.optional(),
      include: TenantIncludeSchema.optional(),
      where: TenantWhereUniqueInputSchema
    })
    .strict()

export const AccountFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindFirstArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: AccountScalarFieldEnumSchema.array().optional()
    })
    .strict()

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindFirstOrThrowArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: AccountScalarFieldEnumSchema.array().optional()
    })
    .strict()

export const AccountFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindManyArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: AccountScalarFieldEnumSchema.array().optional()
    })
    .strict()

export const AccountAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountAggregateArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional()
    })
    .strict()

export const AccountGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.AccountGroupByArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithAggregationInputSchema.array(),
          AccountOrderByWithAggregationInputSchema
        ])
        .optional(),
      by: AccountScalarFieldEnumSchema.array(),
      having: AccountScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional()
    })
    .strict()

export const AccountFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindUniqueArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereUniqueInputSchema
    })
    .strict()

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindUniqueOrThrowArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereUniqueInputSchema
    })
    .strict()

export const TenantCreateArgsSchema: z.ZodType<
  Omit<PrismaClient.Prisma.TenantCreateArgs, 'data'> & {
    data:
      | z.infer<typeof TenantCreateInputSchema>
      | z.infer<typeof TenantUncheckedCreateInputSchema>
  }
> = z
  .object({
    select: TenantSelectSchema.optional(),
    include: TenantIncludeSchema.optional(),
    data: z.union([TenantCreateInputSchema, TenantUncheckedCreateInputSchema])
  })
  .strict()

export const TenantUpsertArgsSchema: z.ZodType<
  Omit<PrismaClient.Prisma.TenantUpsertArgs, 'create' | 'update'> & {
    create:
      | z.infer<typeof TenantCreateInputSchema>
      | z.infer<typeof TenantUncheckedCreateInputSchema>
    update:
      | z.infer<typeof TenantUpdateInputSchema>
      | z.infer<typeof TenantUncheckedUpdateInputSchema>
  }
> = z
  .object({
    select: TenantSelectSchema.optional(),
    include: TenantIncludeSchema.optional(),
    where: TenantWhereUniqueInputSchema,
    create: z.union([
      TenantCreateInputSchema,
      TenantUncheckedCreateInputSchema
    ]),
    update: z.union([TenantUpdateInputSchema, TenantUncheckedUpdateInputSchema])
  })
  .strict()

export const TenantCreateManyArgsSchema: z.ZodType<
  Omit<PrismaClient.Prisma.TenantCreateManyArgs, 'data'> & {
    data: z.infer<typeof TenantCreateManyInputSchema>[]
  }
> = z
  .object({
    data: TenantCreateManyInputSchema.array(),
    skipDuplicates: z.boolean().optional()
  })
  .strict()

export const TenantDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.TenantDeleteArgs> =
  z
    .object({
      select: TenantSelectSchema.optional(),
      include: TenantIncludeSchema.optional(),
      where: TenantWhereUniqueInputSchema
    })
    .strict()

export const TenantUpdateArgsSchema: z.ZodType<
  Omit<PrismaClient.Prisma.TenantUpdateArgs, 'data'> & {
    data:
      | z.infer<typeof TenantUpdateInputSchema>
      | z.infer<typeof TenantUncheckedUpdateInputSchema>
  }
> = z
  .object({
    select: TenantSelectSchema.optional(),
    include: TenantIncludeSchema.optional(),
    data: z.union([TenantUpdateInputSchema, TenantUncheckedUpdateInputSchema]),
    where: TenantWhereUniqueInputSchema
  })
  .strict()

export const TenantUpdateManyArgsSchema: z.ZodType<
  Omit<PrismaClient.Prisma.TenantUpdateManyArgs, 'data'> & {
    data:
      | z.infer<typeof TenantUpdateManyMutationInputSchema>
      | z.infer<typeof TenantUncheckedUpdateManyInputSchema>
  }
> = z
  .object({
    data: z.union([
      TenantUpdateManyMutationInputSchema,
      TenantUncheckedUpdateManyInputSchema
    ]),
    where: TenantWhereInputSchema.optional()
  })
  .strict()

export const TenantDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.TenantDeleteManyArgs> =
  z
    .object({
      where: TenantWhereInputSchema.optional()
    })
    .strict()

export const AccountCreateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountCreateArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      data: z.union([
        AccountCreateInputSchema,
        AccountUncheckedCreateInputSchema
      ])
    })
    .strict()

export const AccountUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpsertArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereUniqueInputSchema,
      create: z.union([
        AccountCreateInputSchema,
        AccountUncheckedCreateInputSchema
      ]),
      update: z.union([
        AccountUpdateInputSchema,
        AccountUncheckedUpdateInputSchema
      ])
    })
    .strict()

export const AccountCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyArgs> =
  z
    .object({
      data: AccountCreateManyInputSchema.array(),
      skipDuplicates: z.boolean().optional()
    })
    .strict()

export const AccountDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.AccountDeleteArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereUniqueInputSchema
    })
    .strict()

export const AccountUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      data: z.union([
        AccountUpdateInputSchema,
        AccountUncheckedUpdateInputSchema
      ]),
      where: AccountWhereUniqueInputSchema
    })
    .strict()

export const AccountUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyArgs> =
  z
    .object({
      data: z.union([
        AccountUpdateManyMutationInputSchema,
        AccountUncheckedUpdateManyInputSchema
      ]),
      where: AccountWhereInputSchema.optional()
    })
    .strict()

export const AccountDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountDeleteManyArgs> =
  z
    .object({
      where: AccountWhereInputSchema.optional()
    })
    .strict()
