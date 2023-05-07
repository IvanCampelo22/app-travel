/*
  Warnings:

  - Added the required column `modifiedAt` to the `AccountType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccountType" ADD COLUMN     "accountTypeDescription" VARCHAR(256),
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" VARCHAR(32),
ADD COLUMN     "isActive" BOOLEAN DEFAULT true,
ADD COLUMN     "modifiedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "modifiedBy" VARCHAR(32);

-- AddForeignKey
ALTER TABLE "AccountType" ADD CONSTRAINT "AccountType_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
