/*
  Warnings:

  - You are about to drop the `lead` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "lead" DROP CONSTRAINT "lead_accountId_fkey";

-- DropForeignKey
ALTER TABLE "lead" DROP CONSTRAINT "lead_tenantId_fkey";

-- DropTable
DROP TABLE "lead";

-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
