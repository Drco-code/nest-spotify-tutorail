/*
  Warnings:

  - Made the column `artist` on table `Song` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duration` on table `Song` required. This step will fail if there are existing NULL values in that column.
  - Made the column `releasedAt` on table `Song` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Song" ALTER COLUMN "artist" SET NOT NULL,
ALTER COLUMN "duration" SET NOT NULL,
ALTER COLUMN "releasedAt" SET NOT NULL;
