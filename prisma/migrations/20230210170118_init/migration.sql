/*
  Warnings:

  - You are about to drop the `Creature` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Creature";

-- CreateTable
CREATE TABLE "Pienssa" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pienssa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pienssa_name_key" ON "Pienssa"("name");
