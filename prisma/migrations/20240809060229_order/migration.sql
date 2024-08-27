/*
  Warnings:

  - You are about to drop the column `buyerAddressId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `totlprice` on the `Order` table. All the data in the column will be lost.
  - Added the required column `totalprice` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_buyerAddressId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "buyerAddressId",
DROP COLUMN "totlprice",
ADD COLUMN     "totalprice" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_id_fkey" FOREIGN KEY ("id") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
