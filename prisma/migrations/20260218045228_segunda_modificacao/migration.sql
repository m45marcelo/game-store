/*
  Warnings:

  - Added the required column `inOffer` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `oldPrice` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `section` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalDiscount` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "inOffer" BOOLEAN NOT NULL,
ADD COLUMN     "oldPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "section" TEXT NOT NULL,
ADD COLUMN     "totalDiscount" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_UserGamesPurchased" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserGamesPurchased_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserGamesPurchased_B_index" ON "_UserGamesPurchased"("B");

-- AddForeignKey
ALTER TABLE "_UserGamesPurchased" ADD CONSTRAINT "_UserGamesPurchased_A_fkey" FOREIGN KEY ("A") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserGamesPurchased" ADD CONSTRAINT "_UserGamesPurchased_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
