/*
  Warnings:

  - The primary key for the `AccountType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `acountTypeCd` on the `AccountType` table. All the data in the column will be lost.
  - Added the required column `accountTypeCd` to the `AccountType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccountType" DROP CONSTRAINT "AccountType_pkey",
DROP COLUMN "acountTypeCd",
ADD COLUMN     "accountTypeCd" VARCHAR(10) NOT NULL,
ADD CONSTRAINT "AccountType_pkey" PRIMARY KEY ("accountTypeCd");
