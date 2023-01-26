-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('WAITING_FOR_SERVICE', 'WAITING_FOR_CUSTOMER', 'PAID', 'QUOTE_SEND', 'CANCELED');

-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('ACCOMODATION', 'FLIGHT', 'CAR', 'PACKAGE', 'EXCURSION', 'CRUISE', 'TRANSFER', 'TOUR', 'TICKET', 'EXCHANGE', 'INSURANCE', 'CONSULTANCY', 'HOLIDAY_PROPERTY', 'RECEPTIVE');

-- CreateEnum
CREATE TYPE "RoomCategory" AS ENUM ('SUITE_MASTER', 'SUITE_PREMIUM', 'SUITE_JUNIOR');

-- CreateEnum
CREATE TYPE "HotelMealPlan" AS ENUM ('BREAKFAST', 'HALF_BOARD', 'FULL_BOARD', 'ALL_INCLUSIVE', 'ALL_INCLUSIVE_PREMIUM');

-- CreateEnum
CREATE TYPE "StayType" AS ENUM ('HOTEL', 'RESORT', 'LODGE', 'HOUSE', 'APARTMENT');

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "countryCode" VARCHAR(2),
ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "currencyCode" VARCHAR(3),
ADD COLUMN     "locale" VARCHAR(6),
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "tenantId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "firstName" VARCHAR(32) NOT NULL,
    "middleName" VARCHAR(32) NOT NULL,
    "lastName" VARCHAR(32) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "mobilePhone" VARCHAR(32),
    "adresses" JSONB NOT NULL,
    "gender" VARCHAR(10) NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" BIGSERIAL NOT NULL,
    "tenantId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "ownerId" BIGINT NOT NULL,
    "prefix" VARCHAR(5) NOT NULL,
    "firstName" VARCHAR(32) NOT NULL,
    "middleName" VARCHAR(32) NOT NULL,
    "lastName" VARCHAR(32) NOT NULL,
    "sufix" VARCHAR(32) NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "countryCode" VARCHAR(2),
    "currencyCode" VARCHAR(3),
    "locale" VARCHAR(6),
    "mobilePhone" VARCHAR(32),
    "adresses" JSONB NOT NULL,
    "gender" VARCHAR(10) NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" BIGSERIAL NOT NULL,
    "tenantId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "customerId" BIGINT,
    "ownerId" BIGINT NOT NULL,
    "fullName" VARCHAR(128),
    "email" VARCHAR(64),
    "phone" VARCHAR(32),
    "postalCode" VARCHAR(32),
    "fromCity" VARCHAR(64),
    "toCity" VARCHAR(64),
    "travelDate" TIMESTAMP(3),
    "travelPeriod" VARCHAR(128),
    "adultsCount" INTEGER,
    "childrenCount" INTEGER,
    "seniorsCount" INTEGER,
    "requestDescription" TEXT,
    "locatorCode" TEXT,
    "totalPrice" MONEY,
    "totalCost" MONEY,
    "paymentType" VARCHAR(10),
    "paymentStatus" VARCHAR(10),
    "paymentTime" TIMESTAMP(3),
    "discountPercent" DECIMAL(65,30),
    "discountAmount" MONEY,
    "paymentAmount" MONEY,
    "voucherFilePath" TEXT,
    "receiptFilePath" TEXT,
    "invoiceFilePath" TEXT,
    "status" "BookingStatus" DEFAULT 'WAITING_FOR_SERVICE',
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingTreveler" (
    "id" BIGSERIAL NOT NULL,
    "tenantId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "bookingId" BIGINT NOT NULL,
    "ownerId" BIGINT NOT NULL,
    "firstName" VARCHAR(64) NOT NULL,
    "lastName" VARCHAR(64) NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "passportNumber" VARCHAR(64) NOT NULL,
    "passportIssueDate" TIMESTAMP(3) NOT NULL,
    "passportExpireDate" TIMESTAMP(3) NOT NULL,
    "email" VARCHAR(64),
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "BookingTreveler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingProduct" (
    "id" BIGSERIAL NOT NULL,
    "tenantId" BIGINT NOT NULL,
    "accountId" BIGINT NOT NULL,
    "bookingId" BIGINT NOT NULL,
    "ownerId" BIGINT NOT NULL,
    "supplierId" BIGINT,
    "productType" "ProductType" NOT NULL,
    "description" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "fromLocation" VARCHAR(64),
    "toLocation" VARCHAR(64) NOT NULL,
    "termsAndConditions" TEXT,
    "productCost" MONEY,
    "tenantMarkup" MONEY,
    "agencyMarkup" MONEY,
    "agentMarkup" MONEY,
    "localTaxes" MONEY,
    "federalTaxes" MONEY,
    "additionalFees" MONEY,
    "discountPercent" MONEY,
    "discount" MONEY,
    "finalPrice" MONEY,
    "paymentDueDate" MONEY,
    "paidDate" MONEY,
    "paymentAmount" MONEY,
    "hotelName" VARCHAR(128),
    "hotelStarRating" INTEGER,
    "hotelMealPlan" "HotelMealPlan",
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "BookingProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingProductRoom" (
    "id" BIGSERIAL NOT NULL,
    "bookingProductId" BIGINT NOT NULL,
    "category" "RoomCategory" NOT NULL,
    "adultsCount" INTEGER NOT NULL,
    "minorsCount" INTEGER NOT NULL,
    "ageOfMinors" INTEGER[],
    "Price" MONEY,
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "BookingProductRoom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_tenantId_accountId_key" ON "User"("tenantId", "accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_tenantId_accountId_key" ON "Customer"("tenantId", "accountId");

-- CreateIndex
CREATE UNIQUE INDEX "Booking_tenantId_accountId_customerId_key" ON "Booking"("tenantId", "accountId", "customerId");

-- CreateIndex
CREATE UNIQUE INDEX "BookingProduct_tenantId_accountId_bookingId_key" ON "BookingProduct"("tenantId", "accountId", "bookingId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTreveler" ADD CONSTRAINT "BookingTreveler_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTreveler" ADD CONSTRAINT "BookingTreveler_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTreveler" ADD CONSTRAINT "BookingTreveler_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTreveler" ADD CONSTRAINT "BookingTreveler_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingProduct" ADD CONSTRAINT "BookingProduct_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingProduct" ADD CONSTRAINT "BookingProduct_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingProduct" ADD CONSTRAINT "BookingProduct_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingProduct" ADD CONSTRAINT "BookingProduct_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingProduct" ADD CONSTRAINT "BookingProduct_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingProductRoom" ADD CONSTRAINT "BookingProductRoom_bookingProductId_fkey" FOREIGN KEY ("bookingProductId") REFERENCES "BookingProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
