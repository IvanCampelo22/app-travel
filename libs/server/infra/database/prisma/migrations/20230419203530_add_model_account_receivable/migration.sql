/*
  Warnings:

  - Added the required column `modifiedAt` to the `AccountPayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payableDescription` to the `AccountPayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payableDueDate` to the `AccountPayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `AccountPayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modifiedAt` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccountPayable" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" VARCHAR(32),
ADD COLUMN     "isActive" BOOLEAN DEFAULT true,
ADD COLUMN     "modifiedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "modifiedBy" VARCHAR(32),
ADD COLUMN     "payableAccountId" INTEGER,
ADD COLUMN     "payableAmount" MONEY,
ADD COLUMN     "payableDescription" VARCHAR(256) NOT NULL,
ADD COLUMN     "payableDueDate" DATE NOT NULL,
ADD COLUMN     "paymentDate" DATE,
ADD COLUMN     "productId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "accountId" INTEGER NOT NULL,
ADD COLUMN     "available_stock" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" VARCHAR(32),
ADD COLUMN     "isActive" BOOLEAN DEFAULT true,
ADD COLUMN     "maxStock" MONEY,
ADD COLUMN     "modifiedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "modifiedBy" VARCHAR(32),
ADD COLUMN     "product_description" TEXT,
ADD COLUMN     "product_name" VARCHAR(256),
ADD COLUMN     "product_type" VARCHAR(64),
ADD COLUMN     "supplier_account" INTEGER,
ADD COLUMN     "tenantId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "AccountReceivable" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "AccountReceivable_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AccountPayable" ADD CONSTRAINT "AccountPayable_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
