-- CreateEnum
CREATE TYPE "AccountCategory" AS ENUM ('Agency', 'InternalAgent', 'Customer', 'Supplier', 'Influencer');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('WaitingService', 'WaitingCustomer', 'WaitingPayment', 'Paid', 'QuoteSend', 'Canceled', 'RefundRequested', 'Refunded');

-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('Accommodation');

-- CreateEnum
CREATE TYPE "AccommodationType" AS ENUM ('Hotel', 'Resort');

-- CreateEnum
CREATE TYPE "RoomCategory" AS ENUM ('SuiteMaster', 'SuitePremium', 'SuiteJunior');

-- CreateTable
CREATE TABLE "Tenant" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "dobName" VARCHAR(64),
    "taxId" VARCHAR(30),
    "brand" VARCHAR(256),
    "contactPrefix" VARCHAR(6),
    "contactFirstName" VARCHAR(32),
    "contactMiddleName" VARCHAR(32),
    "contactLastName" VARCHAR(32),
    "contactSuffix" VARCHAR(6),
    "jobTitle" VARCHAR(32),
    "email" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(32),
    "mobilePhone" VARCHAR(64),
    "fax" VARCHAR(64),
    "billingAdresses" JSONB,
    "shippingAdresses" JSONB,
    "termsAndConditions" TEXT,
    "privacyPolicy" TEXT,
    "bankName" VARCHAR(64),
    "branch" TEXT,
    "bankAccount" VARCHAR(64),
    "notes" TEXT,
    "countryCode" VARCHAR(2),
    "currencyCode" VARCHAR(3),
    "locale" VARCHAR(6),
    "timeZone" VARCHAR(20),
    "referralSource" TEXT,
    "domain" VARCHAR(64),
    "siteConfig" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(32),
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" VARCHAR(32),
    "isActive" BOOLEAN DEFAULT true,
    "isMaster" BOOLEAN DEFAULT false,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER,
    "accountId" INTEGER,
    "firstName" VARCHAR(32) NOT NULL,
    "lastName" VARCHAR(32) NOT NULL,
    "companyName" VARCHAR(32),
    "jobTitle" VARCHAR(32),
    "department" VARCHAR(32),
    "managerName" VARCHAR(32),
    "email" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(32),
    "mobilePhone" VARCHAR(32),
    "fax" VARCHAR(64),
    "adresses" JSONB,
    "gender" TEXT,
    "birthDate" DATE,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(32),
    "modifiedAt" TIMESTAMP(3),
    "modifiedBy" VARCHAR(32),
    "isActive" BOOLEAN DEFAULT true,
    "isMaster" BOOLEAN DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "parentId" INTEGER,
    "ownerId" INTEGER NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "category" "AccountCategory" NOT NULL,
    "dobName" VARCHAR(64),
    "taxId" VARCHAR(24),
    "ssn" VARCHAR(24),
    "brand" VARCHAR(64),
    "email" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(32),
    "mobilePhone" VARCHAR(32),
    "fax" VARCHAR(64),
    "billingAdresses" JSONB,
    "shippingAdresses" JSONB,
    "termsAndConditions" TEXT,
    "privacyPolicy" TEXT,
    "bankName" VARCHAR(64),
    "branch" TEXT,
    "bankAccount" VARCHAR(64),
    "notes" TEXT,
    "countryCode" VARCHAR(2),
    "currencyCode" VARCHAR(3),
    "locale" VARCHAR(6),
    "timeZone" VARCHAR(20),
    "referralSource" TEXT,
    "domain" VARCHAR(64),
    "siteConfig" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(32),
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" VARCHAR(32),
    "isActive" BOOLEAN DEFAULT true,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "accountId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "customerName" VARCHAR(128) NOT NULL,
    "customerEmail" VARCHAR(64),
    "customerPhone" VARCHAR(32),
    "postalCode" VARCHAR(32),
    "fromCity" VARCHAR(64),
    "toCity" VARCHAR(64),
    "travelDate" TIMESTAMP(3),
    "travelPeriod" VARCHAR(12),
    "adultsCount" INTEGER,
    "childrenCount" INTEGER,
    "seniorsCount" INTEGER,
    "requestDescription" TEXT,
    "status" "BookingStatus" NOT NULL DEFAULT 'WaitingService',
    "locatorCode" VARCHAR(14),
    "totalPrice" MONEY,
    "totalCost" MONEY,
    "paymentType" VARCHAR(10),
    "paymentStatus" VARCHAR(10),
    "paymentDateTime" TIMESTAMP(3),
    "discountPercent" DECIMAL(3,1),
    "discountAmount" MONEY,
    "paymentAmount" MONEY,
    "voucherFilePath" TEXT,
    "receiptFilePath" TEXT,
    "invoiceFilePath" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(32),
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" VARCHAR(32),
    "isActive" BOOLEAN DEFAULT true,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingTraveler" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "accountId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "firstName" VARCHAR(32) NOT NULL,
    "lastName" VARCHAR(32) NOT NULL,
    "birthDate" DATE NOT NULL,
    "passportNumber" VARCHAR(64) NOT NULL,
    "passportIssueDate" DATE NOT NULL,
    "passportExpireDate" DATE NOT NULL,
    "email" VARCHAR(64) NOT NULL,
    "phone" VARCHAR(32),
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(32),
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" VARCHAR(32),
    "isActive" BOOLEAN DEFAULT true,

    CONSTRAINT "BookingTraveler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingProduct" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "accountId" INTEGER NOT NULL,
    "supplierId" INTEGER,
    "supplierName" VARCHAR(128),
    "ownerId" INTEGER NOT NULL,
    "category" "ProductCategory" NOT NULL,
    "description" TEXT,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "fromLocation" VARCHAR(64),
    "toLocation" VARCHAR(64) NOT NULL,
    "termsAndConditions" TEXT,
    "locatorCode" VARCHAR(14),
    "productCost" MONEY,
    "tenantMarkup" MONEY,
    "agencyMarkup" MONEY,
    "agentMarkup" MONEY,
    "localTaxes" MONEY,
    "stateTaxes" MONEY,
    "federalTaxes" MONEY,
    "additionalFees" MONEY,
    "discountPercent" DECIMAL(3,1),
    "discount" MONEY,
    "finalPrice" MONEY,
    "paymentDueDate" DATE,
    "paidDate" DATE,
    "paymentAmount" MONEY,
    "voucherFilePath" TEXT,
    "receiptFilePath" TEXT,
    "invoiceFilePath" TEXT,
    "status" VARCHAR(10),
    "hotelName" VARCHAR(128),
    "hotelStarRating" INTEGER,
    "hotelMealPlan" VARCHAR(64),
    "accommodationType" "AccommodationType",
    "bookingGroupId" INTEGER,
    "paymentType" VARCHAR(64),
    "paymentDescription" TEXT,
    "creditCardType" VARCHAR(32),
    "creditCardLastFourDigits" INTEGER,
    "creditCardAuthorizationCode" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(32),
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" VARCHAR(32),
    "isActive" BOOLEAN DEFAULT true,

    CONSTRAINT "BookingProduct_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingProductRoom" (
    "id" SERIAL NOT NULL,
    "bookingProductId" INTEGER NOT NULL,
    "category" "RoomCategory" NOT NULL,
    "adultsCount" INTEGER NOT NULL,
    "minorsCount" INTEGER NOT NULL DEFAULT 0,
    "ageOfMinors" INTEGER[],
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" VARCHAR(32),
    "modifiedAt" TIMESTAMP(3) NOT NULL,
    "modifiedBy" VARCHAR(32),
    "isActive" BOOLEAN DEFAULT true,

    CONSTRAINT "BookingProductRoom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTraveler" ADD CONSTRAINT "BookingTraveler_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTraveler" ADD CONSTRAINT "BookingTraveler_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingTraveler" ADD CONSTRAINT "BookingTraveler_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingProduct" ADD CONSTRAINT "BookingProduct_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingProduct" ADD CONSTRAINT "BookingProduct_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingProduct" ADD CONSTRAINT "BookingProduct_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingProductRoom" ADD CONSTRAINT "BookingProductRoom_bookingProductId_fkey" FOREIGN KEY ("bookingProductId") REFERENCES "BookingProduct"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
