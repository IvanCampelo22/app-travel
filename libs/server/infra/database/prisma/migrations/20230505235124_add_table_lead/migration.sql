-- CreateTable
CREATE TABLE "lead" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER NOT NULL,
    "tenantId" INTEGER,

    CONSTRAINT "lead_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lead" ADD CONSTRAINT "lead_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lead" ADD CONSTRAINT "lead_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
