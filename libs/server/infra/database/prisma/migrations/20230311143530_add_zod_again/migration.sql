/*
  Warnings:

  - Made the column `ownerId` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "ownerId" SET NOT NULL;
