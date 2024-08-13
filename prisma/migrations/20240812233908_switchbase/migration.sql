-- CreateEnum
CREATE TYPE "CustomerType" AS ENUM ('MIGRATION', 'NEW');

-- CreateEnum
CREATE TYPE "RadioStatus" AS ENUM ('RETRIEVED', 'NOT_RETRIEVED');

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "homeAddress" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "connectedSplitter" TEXT NOT NULL,
    "customerType" "CustomerType" NOT NULL,
    "radioStatus" "RadioStatus" NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Installation" (
    "id" TEXT NOT NULL,
    "installationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "macId" TEXT NOT NULL,
    "PaymentRef" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Installation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- AddForeignKey
ALTER TABLE "Installation" ADD CONSTRAINT "Installation_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
