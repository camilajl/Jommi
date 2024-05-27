-- AlterTable
ALTER TABLE "User" ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;
