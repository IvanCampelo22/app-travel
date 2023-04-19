/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientId` to the `AccountReceivable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_of_birth` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modifiedAt` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerUserId` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccountReceivable" ADD COLUMN     "clientId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "accountId" INTEGER NOT NULL,
ADD COLUMN     "bankAccount" VARCHAR(256),
ADD COLUMN     "bankName" TEXT,
ADD COLUMN     "branchName" TEXT,
ADD COLUMN     "ccApproval" VARCHAR(64),
ADD COLUMN     "ccCvv2" VARCHAR(64),
ADD COLUMN     "ccExpire" VARCHAR(4),
ADD COLUMN     "ccName" VARCHAR(64),
ADD COLUMN     "ccNumber" VARCHAR(256),
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" VARCHAR(32),
ADD COLUMN     "date_of_birth" DATE NOT NULL,
ADD COLUMN     "email" VARCHAR(256) NOT NULL,
ADD COLUMN     "firstName" VARCHAR(64) NOT NULL,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "isActive" BOOLEAN DEFAULT true,
ADD COLUMN     "lastName" VARCHAR(64) NOT NULL,
ADD COLUMN     "mailingAdress1" TEXT,
ADD COLUMN     "mailingAdress2" TEXT,
ADD COLUMN     "mailingAdress3" TEXT,
ADD COLUMN     "mailingCity" VARCHAR(64),
ADD COLUMN     "mailingCountry" VARCHAR(64),
ADD COLUMN     "mailingPostalCode" VARCHAR(64),
ADD COLUMN     "mailingState" VARCHAR(2),
ADD COLUMN     "middleName" VARCHAR(64),
ADD COLUMN     "mobilePhone" VARCHAR(256),
ADD COLUMN     "modifiedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "modifiedBy" VARCHAR(32),
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "otherAdress1" TEXT,
ADD COLUMN     "otherAdress2" TEXT,
ADD COLUMN     "otherAdress3" TEXT,
ADD COLUMN     "otherCity" VARCHAR(64),
ADD COLUMN     "otherCountry" VARCHAR(64),
ADD COLUMN     "otherPostalCode" VARCHAR(64),
ADD COLUMN     "otherState" VARCHAR(2),
ADD COLUMN     "ownerUserId" TEXT NOT NULL,
ADD COLUMN     "phone" VARCHAR(256),
ADD COLUMN     "prefix" TEXT,
ADD COLUMN     "suffix" VARCHAR(256),
ADD COLUMN     "tenantId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "Client"("email");

-- AddForeignKey
ALTER TABLE "AccountReceivable" ADD CONSTRAINT "AccountReceivable_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
