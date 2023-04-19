/*
  Warnings:

  - Added the required column `bookingId` to the `AccountPayable` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingProductId` to the `AccountPayable` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccountPayable" ADD COLUMN     "bookingId" INTEGER NOT NULL,
ADD COLUMN     "bookingProductId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AccountPayable" ADD CONSTRAINT "AccountPayable_bookingProductId_fkey" FOREIGN KEY ("bookingProductId") REFERENCES "BookingProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountPayable" ADD CONSTRAINT "AccountPayable_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
