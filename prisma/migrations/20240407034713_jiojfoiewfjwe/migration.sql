/*
  Warnings:

  - You are about to drop the column `active` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `active` to the `todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "active",
DROP COLUMN "name";

-- AlterTable
ALTER TABLE "todo" ADD COLUMN     "active" BOOLEAN NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
