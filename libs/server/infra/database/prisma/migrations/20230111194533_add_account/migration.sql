-- CreateTable
CREATE TABLE "Account" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "dobName" VARCHAR(64),
    "taxId" VARCHAR(30),
    "email" VARCHAR(64) NOT NULL,
    "tenantId" BIGINT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
