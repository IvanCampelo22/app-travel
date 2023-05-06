/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Lead` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountId` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modifiedAt` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerUserId` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suffix` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lead" ADD COLUMN     "accountId" INTEGER NOT NULL,
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" VARCHAR(32),
ADD COLUMN     "dateOfBirth" DATE NOT NULL,
ADD COLUMN     "department" VARCHAR(64),
ADD COLUMN     "email" VARCHAR(256) NOT NULL,
ADD COLUMN     "fax" VARCHAR(256),
ADD COLUMN     "firstName" VARCHAR(64) NOT NULL,
ADD COLUMN     "isActive" BOOLEAN DEFAULT true,
ADD COLUMN     "jobTitle" TEXT,
ADD COLUMN     "lastName" VARCHAR(64) NOT NULL,
ADD COLUMN     "mailingAdress1" TEXT,
ADD COLUMN     "mailingAdress2" TEXT,
ADD COLUMN     "mailingAdress3" TEXT,
ADD COLUMN     "mailingCity" TEXT,
ADD COLUMN     "mailingCountry" VARCHAR(64),
ADD COLUMN     "mailingPostalCode" VARCHAR(64),
ADD COLUMN     "mailingState" VARCHAR(2),
ADD COLUMN     "managerName" VARCHAR(64),
ADD COLUMN     "mobilPhone" VARCHAR(256),
ADD COLUMN     "modifiedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "modifiedBy" VARCHAR(32),
ADD COLUMN     "otherAdress1" TEXT,
ADD COLUMN     "otherAdress2" TEXT,
ADD COLUMN     "otherAdress3" TEXT,
ADD COLUMN     "otherCity" TEXT,
ADD COLUMN     "otherCountry" VARCHAR(64),
ADD COLUMN     "otherPostalCode" VARCHAR(64),
ADD COLUMN     "otherState" VARCHAR(2),
ADD COLUMN     "ownerUserId" TEXT NOT NULL,
ADD COLUMN     "phone" VARCHAR(256),
ADD COLUMN     "prefix" TEXT,
ADD COLUMN     "suffix" TEXT NOT NULL,
ADD COLUMN     "tenantId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Lead_email_key" ON "Lead"("email");

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
