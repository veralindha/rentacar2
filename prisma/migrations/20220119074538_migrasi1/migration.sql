-- CreateTable
CREATE TABLE "Mobil" (
    "id" SERIAL NOT NULL,
    "namaMobil" TEXT NOT NULL,
    "penumpang" INTEGER NOT NULL,
    "bagasi" INTEGER NOT NULL,
    "harga" INTEGER NOT NULL,
    "transmisi" BOOLEAN NOT NULL,

    CONSTRAINT "Mobil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pesanan" (
    "idPesanan" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "nomor" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "mulai" TIMESTAMP(3) NOT NULL,
    "sampai" TIMESTAMP(3) NOT NULL,
    "tambahan" BOOLEAN NOT NULL,

    CONSTRAINT "Pesanan_pkey" PRIMARY KEY ("idPesanan")
);
