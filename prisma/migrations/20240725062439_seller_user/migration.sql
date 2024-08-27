/*
  Warnings:

  - Added the required column `LastName` to the `SellerUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SellerUser" ADD COLUMN     "LastName" TEXT NOT NULL;
