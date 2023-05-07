-- CreateTable
CREATE TABLE "AccountType" (
    "acountTypeCd" VARCHAR(10) NOT NULL,
    "tenantId" INTEGER NOT NULL,

    CONSTRAINT "AccountType_pkey" PRIMARY KEY ("acountTypeCd")
);
