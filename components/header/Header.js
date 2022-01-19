export default function Header() {
  return (
    <>
      <div className="bg-hero h-[640px]">
        <div className="container mx-auto">
          <div className="text-center pt-[240px]">
            <h1 className="font-Poppins font-extrabold text-5xl">
              Sewa Sebuah Mobil
            </h1>
            <h1 className="font-Poppins font-bold tracking-wider text-xl">
              Hanya Dengan Menggunakan Jari
            </h1>
            <a
              href="/"
              className="bg-warna2 px-4 rounded-full font-semibold text-warna4 font-DMSans py-2 inline-block mt-10"
            >
              Rental Sekarang
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
