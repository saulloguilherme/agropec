/*
  Warnings:

  - You are about to drop the column `imagem` on the `Evento` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Evento" DROP COLUMN "imagem",
ADD COLUMN     "imagem_capa" TEXT,
ADD COLUMN     "imagem_descricao" TEXT;
