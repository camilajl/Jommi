/*
  Warnings:

  - Added the required column `route` to the `Page` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Page" ADD COLUMN     "route" TEXT NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;
