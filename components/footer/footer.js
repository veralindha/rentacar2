export default function Footer() {
  return (
    <>
      <div className="max-w-full mx-auto bg-warna1 py-8 mt-14">
        {/* box footer */}
        <div className="container mx-auto h-40">
          <div className="flex justify-between text-warna4">
            {/* Menu */}
            {/* Menu 1 */}
            <div className="w-3/12">
              <div className="text-lg font-bold pb-2">Layanan</div>
              <ul className="ml-2 space-y-1 text-sm text-warna3">
                <li>
                  <a href="#">Sewa Mobil</a>
                </li>
                <li>
                  <a href="#">Customer 24 Jam</a>
                </li>
              </ul>
            </div>
            {/* Menu 2 */}
            <div className="w-3/12">
              <div className="text-lg font-bold pb-2">About</div>
              <ul className="ml-2 space-y-1 text-sm text-warna3">
                <li>
                  <a href="#">Tentang Perusahaan</a>
                </li>
                <li>
                  <a href="#">Tim</a>
                </li>
                <li>
                  <a href="#">Karir</a>
                </li>
              </ul>
            </div>
            {/* Menu 3 */}
            <div className="w-6/12">
              <div className="text-xl font-bold text-warna4 pb-2">RENTACAR</div>
              <p className="text-warna3 text-sm tracking-wide ">
                Sebuah website yang berguna untuk menyewa sebuah mobil secara
                online. Pengguna tanpa ribet melakukan pengecekan kondisi mobil,
                karena sebelum masuk daftar penyewaan mobil sudah dicek terlebih
                dahulu oleh tim kami.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-around mt-3">
            <div className="space-x-5 flex">
              {/* Facebook */}
              <div className="text-3xl text-warna4">
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
              {/* Twitter */}
              <div className="text-3xl text-warna4">
                <a href="">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
              {/* Instagram */}
              <div className="text-3xl text-warna4">
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
