/*
  Warnings:

  - You are about to drop the column `date_of_birth` on the `Client` table. All the data in the column will be lost.
  - Added the required column `dateOfBirth` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "date_of_birth",
ADD COLUMN     "dateOfBirth" DATE NOT NULL;
