import { prisma } from "../../lib/prisma";
const handler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method tidak diizinkan" });
  const data = JSON.parse(req.body);
  const hapus = await prisma.mobil.delete({
    where: { id: data.id },
  });
  res.json(hapus);
};
export default handler;
