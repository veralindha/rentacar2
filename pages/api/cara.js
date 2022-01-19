export default function handler(req, res) {
  res.status(200).json([
    {
      nomor: 1,
      step: "Pilih Mobil",
      deskripsi:
        "Disini terdapat berbagai mobil yang berkualitas dan siap pakai. Pilihlah mobil sesuai dengan kebutuhan anda.",
    },
    {
      nomor: 2,
      step: "Isi Formulir",
      deskripsi: "Isi formulir sebagai syarat untuk menyewa sebuah mobil",
    },
    {
      nomor: 3,
      step: "Pembayaran",
      deskripsi: "Lakukan pembayaran melalui media pembayaran yang tersedia",
    },
  ]);
}
