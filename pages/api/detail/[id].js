import { prisma } from "../../../lib/prisma";
const handler = async (req, res) => {
  const { id } = req.query;
  const mobil = await prisma.mobil.findUnique({
    where: { id: Number(id) },
  });
  res.json(mobil);
};

export default handler;
