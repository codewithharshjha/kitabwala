-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "bookname" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totlprice" TEXT NOT NULL,
    "orderdate" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "buyername" TEXT NOT NULL,
    "buyeremail" TEXT NOT NULL,
    "buyerphone" TEXT NOT NULL,
    "buyeraddress" TEXT NOT NULL,
    "buyerphonenumber" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);
