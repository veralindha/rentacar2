import { prisma } from "../../lib/prisma";

const handler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Request method tidak diizinkan" });

  console.log(`Req body : ${req.body}`);

  const akun = JSON.parse(req.body);

  const tambah = await prisma.akun.create({
    data: {
      username: akun.username,
      email: akun.email,
      password: akun.password,
    },
  });

  res.json(tambah);
};

export default handler;
