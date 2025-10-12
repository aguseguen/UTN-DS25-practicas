-- DropForeignKey
ALTER TABLE "public"."Libro" DROP CONSTRAINT "Libro_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Libro" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Libro" ADD CONSTRAINT "Libro_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
