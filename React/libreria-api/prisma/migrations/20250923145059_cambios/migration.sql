/*
  Warnings:

  - You are about to drop the column `seccion` on the `Libro` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Libro" DROP COLUMN "seccion",
ADD COLUMN     "seccionId" INTEGER;

-- DropEnum
DROP TYPE "public"."Seccion";

-- CreateTable
CREATE TABLE "public"."Seccion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Seccion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Seccion_nombre_key" ON "public"."Seccion"("nombre");

-- AddForeignKey
ALTER TABLE "public"."Libro" ADD CONSTRAINT "Libro_seccionId_fkey" FOREIGN KEY ("seccionId") REFERENCES "public"."Seccion"("id") ON DELETE SET NULL ON UPDATE CASCADE;
