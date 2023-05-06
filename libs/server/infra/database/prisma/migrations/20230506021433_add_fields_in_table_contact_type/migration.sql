/*
  Warnings:

  - Added the required column `accountId` to the `ContactType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modifiedAt` to the `ContactType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `ContactType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContactType" ADD COLUMN     "accountId" INTEGER NOT NULL,
ADD COLUMN     "contactTypeDescription" VARCHAR(256),
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" VARCHAR(32),
ADD COLUMN     "isActive" BOOLEAN DEFAULT true,
ADD COLUMN     "modifiedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "modifiedBy" VARCHAR(32),
ADD COLUMN     "tenantId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ContactType" ADD CONSTRAINT "ContactType_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactType" ADD CONSTRAINT "ContactType_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
