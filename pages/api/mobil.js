import { prisma } from "../../lib/prisma";

const handler = async (req, res) => {
  const mobil = await prisma.mobil.findMany();
  res.json(mobil);
};

export default handler;
