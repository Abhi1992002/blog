/*
  Warnings:

  - Changed the type of `tag` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Tag" AS ENUM ('PROJECT', 'CODE', 'THOUGHTS', 'TOOLS');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "tag",
ADD COLUMN     "tag" "Tag" NOT NULL;
