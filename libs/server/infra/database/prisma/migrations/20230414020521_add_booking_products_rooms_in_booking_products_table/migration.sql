/*
  Warnings:

  - You are about to drop the `BookingProductRoom` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `adultsCount` to the `BookingProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minorsCounts` to the `BookingProduct` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BookingProductRoom" DROP CONSTRAINT "BookingProductRoom_bookingProductId_fkey";

-- AlterTable
ALTER TABLE "BookingProduct" ADD COLUMN     "adultsCount" INTEGER NOT NULL,
ADD COLUMN     "ageOfMinors" INTEGER[],
ADD COLUMN     "minorsCounts" INTEGER NOT NULL,
ADD COLUMN     "roomCategory" "RoomCategory";

-- DropTable
DROP TABLE "BookingProductRoom";
