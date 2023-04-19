/*
  Warnings:

  - Added the required column `accountId` to the `AccountReceivable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingId` to the `AccountReceivable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modifiedAt` to the `AccountReceivable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `AccountReceivable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receivableDueDate` to the `AccountReceivable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccountReceivable" ADD COLUMN     "accountId" INTEGER NOT NULL,
ADD COLUMN     "bookingId" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" VARCHAR(32),
ADD COLUMN     "isActive" BOOLEAN DEFAULT true,
ADD COLUMN     "modifiedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "modifiedBy" VARCHAR(32),
ADD COLUMN     "productId" INTEGER NOT NULL,
ADD COLUMN     "receivableAmount" MONEY,
ADD COLUMN     "receivableDate" DATE,
ADD COLUMN     "receivableDescription" VARCHAR(256),
ADD COLUMN     "receivableDueDate" DATE NOT NULL;

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AccountReceivable" ADD CONSTRAINT "AccountReceivable_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountReceivable" ADD CONSTRAINT "AccountReceivable_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountReceivable" ADD CONSTRAINT "AccountReceivable_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
