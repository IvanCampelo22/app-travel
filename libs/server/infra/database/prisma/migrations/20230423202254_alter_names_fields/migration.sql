/*
  Warnings:

  - You are about to drop the column `product_description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_name` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `product_type` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `supplier_account` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "product_description",
DROP COLUMN "product_name",
DROP COLUMN "product_type",
DROP COLUMN "supplier_account",
ADD COLUMN     "productDescription" TEXT,
ADD COLUMN     "productName" VARCHAR(256),
ADD COLUMN     "productType" VARCHAR(64),
ADD COLUMN     "supplierAccount" INTEGER;
