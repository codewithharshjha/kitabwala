-- CreateTable
CREATE TABLE "SellerUser" (
    "id" SERIAL NOT NULL,
    "Firstname" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "ConfirmPassword" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "Address1" TEXT NOT NULL,
    "Address2" TEXT,
    "City" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "Zip" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "PanCardNumber" TEXT NOT NULL,
    "AadharCardNumber" TEXT NOT NULL,
    "GSTNumber" TEXT,

    CONSTRAINT "SellerUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SellerUser_Email_key" ON "SellerUser"("Email");
