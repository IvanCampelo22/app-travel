/*
  Warnings:

  - You are about to drop the column `minorsCounts` on the `BookingProduct` table. All the data in the column will be lost.
  - Added the required column `minorsCount` to the `BookingProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookingProduct" DROP COLUMN "minorsCounts",
ADD COLUMN     "minorsCount" INTEGER NOT NULL;
