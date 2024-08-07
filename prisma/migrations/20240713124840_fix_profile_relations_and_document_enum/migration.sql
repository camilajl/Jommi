/*
  Warnings:

  - You are about to drop the column `email` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the `_ProfileToRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProfileToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `document` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documentType` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnumDocumentType" AS ENUM ('CC', 'CE', 'NIT', 'PASAPORTE', 'VISA');

-- DropForeignKey
ALTER TABLE "_ProfileToRole" DROP CONSTRAINT "_ProfileToRole_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProfileToRole" DROP CONSTRAINT "_ProfileToRole_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProfileToUser" DROP CONSTRAINT "_ProfileToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProfileToUser" DROP CONSTRAINT "_ProfileToUser_B_fkey";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "email",
DROP COLUMN "image",
ADD COLUMN     "document" TEXT NOT NULL,
ADD COLUMN     "documentType" "EnumDocumentType" NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "roleId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ProfileToRole";

-- DropTable
DROP TABLE "_ProfileToUser";

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
