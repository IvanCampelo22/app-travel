/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modifiedAt` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "accountId" INTEGER NOT NULL,
ADD COLUMN     "allowCreateUser" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "contactTypeCd" VARCHAR(64),
ADD COLUMN     "contactUserId" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" VARCHAR(32),
ADD COLUMN     "dateOfBirth" DATE NOT NULL,
ADD COLUMN     "department" VARCHAR(64),
ADD COLUMN     "email" VARCHAR(256) NOT NULL,
ADD COLUMN     "fax" VARCHAR(256),
ADD COLUMN     "firstName" VARCHAR(64) NOT NULL,
ADD COLUMN     "gender" TEXT,
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
ADD COLUMN     "middleName" TEXT,
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
ADD COLUMN     "ownerUserId" TEXT,
ADD COLUMN     "phone" VARCHAR(256),
ADD COLUMN     "prefix" TEXT,
ADD COLUMN     "suffix" TEXT,
ADD COLUMN     "tenantId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
