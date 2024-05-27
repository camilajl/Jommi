/*
  Warnings:

  - You are about to drop the `PagesOnRoles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RolesOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PagesOnRoles" DROP CONSTRAINT "PagesOnRoles_pageId_fkey";

-- DropForeignKey
ALTER TABLE "PagesOnRoles" DROP CONSTRAINT "PagesOnRoles_roleId_fkey";

-- DropForeignKey
ALTER TABLE "RolesOnUsers" DROP CONSTRAINT "RolesOnUsers_roleId_fkey";

-- DropForeignKey
ALTER TABLE "RolesOnUsers" DROP CONSTRAINT "RolesOnUsers_userId_fkey";

-- DropTable
DROP TABLE "PagesOnRoles";

-- DropTable
DROP TABLE "RolesOnUsers";

-- CreateTable
CREATE TABLE "_PageToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RoleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PageToRole_AB_unique" ON "_PageToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_PageToRole_B_index" ON "_PageToRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser"("B");

-- AddForeignKey
ALTER TABLE "_PageToRole" ADD CONSTRAINT "_PageToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageToRole" ADD CONSTRAINT "_PageToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
