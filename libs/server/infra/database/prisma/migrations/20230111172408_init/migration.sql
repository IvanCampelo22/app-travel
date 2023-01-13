-- CreateTable
CREATE TABLE "Tenant" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "dobName" VARCHAR(64),
    "taxId" VARCHAR(30),
    "email" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(32),
    "mobilePhone" VARCHAR(64),
    "contactPrefix" VARCHAR(6),
    "contactFirstName" VARCHAR(32),
    "contactMiddleName" VARCHAR(32),
    "contactLastName" VARCHAR(32),
    "brandUrl" TEXT,
    "ownerUserId" TEXT,
    "countryCode" VARCHAR(2),
    "currencyCode" VARCHAR(3),
    "locale" VARCHAR(6),
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);
