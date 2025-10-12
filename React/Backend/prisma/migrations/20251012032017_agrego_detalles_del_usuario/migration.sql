/*
  Warnings:

  - Added the required column `apellido` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaNac` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "apellido" TEXT NOT NULL,
ADD COLUMN     "fechaNac" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "sexo" TEXT NOT NULL,
ADD COLUMN     "temaFav" TEXT;
