import { prisma } from "../../lib/prisma";

const handler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method tidak diizinkan" });

  console.log(`Req body : ${req.body}`);

  const mobil = JSON.parse(req.body);
  const tambah = await prisma.mobil.create({
    data: {
      foto: mobil.pathFoto,
      namaMobil: mobil.namaMobil,
      transmisi: mobil.transmisi == "true" ? true : false,
      harga: mobil.harga,
      bagasi: mobil.jumlahPenumpang,
      penumpang: mobil.jumlahPenumpang,
    },
  });

  res.json(tambah);
};

export default handler;
