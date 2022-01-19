-- AlterTable
ALTER TABLE "Mobil" ADD COLUMN     "foto" TEXT;

-- CreateTable
CREATE TABLE "Akun" (
    "idAkun" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Akun_pkey" PRIMARY KEY ("idAkun")
);
