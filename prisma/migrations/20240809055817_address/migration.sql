/*
  Warnings:

  - You are about to drop the column `buyeraddress` on the `Order` table. All the data in the column will be lost.
  - Added the required column `buyerAddressId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `orderdate` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "buyeraddress",
ADD COLUMN     "buyerAddressId" INTEGER NOT NULL,
DROP COLUMN "orderdate",
ADD COLUMN     "orderdate" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "line1" TEXT NOT NULL,
    "line2" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalcode" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_buyerAddressId_fkey" FOREIGN KEY ("buyerAddressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
