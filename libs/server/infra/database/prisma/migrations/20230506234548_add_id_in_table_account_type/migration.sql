/*
  Warnings:

  - The primary key for the `AccountType` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "AccountType" DROP CONSTRAINT "AccountType_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "AccountType_pkey" PRIMARY KEY ("id");
