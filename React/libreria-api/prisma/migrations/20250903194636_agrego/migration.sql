/*
  Warnings:

  - Added the required column `seccion` to the `Libro` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Seccion" AS ENUM ('Ciencia_Ficcion', 'Fantasia', 'Psicologia', 'Romance_Juvenil');

-- AlterTable
ALTER TABLE "public"."Libro" ADD COLUMN     "seccion" "public"."Seccion" NOT NULL;
