-- CreateTable
CREATE TABLE "BookToSell" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "BookToSell_pkey" PRIMARY KEY ("id")
);
