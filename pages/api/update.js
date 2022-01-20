import { prisma } from "../../lib/prisma";
const handler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method tidak diizinkan" });
  const data = JSON.parse(req.body);

  const hapus = await prisma.mobil.update({
    where: { id: data.id },
    data: {
      namaMobil: data.namaMobil,
      harga: data.harga,
      bagasi: data.bagasi,
      penumpang: data.penumpang,
      transmisi: data.transmisi,
    },
  });
  res.json(hapus);
};
export default handler;
