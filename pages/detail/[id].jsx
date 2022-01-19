import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import useSWR from "swr";
import Link from "next/link";

export async function getServerSideProps(context) {
  return { props: { id: context.params.id } };
}

const fetcher = (url) => fetch(url).then((res) => res.json());

const detail = (props) => {
  const { data, error } = useSWR(`/api/detail/${props.id}`, fetcher);

  if (error) return <p>Ada masalah saat fetching data kontak dengan ID {id}</p>;
  if (!data) return <p>Loading...</p>;
  if (data.length == 0) return <p>Tidak ditemukan kontak dengan ID {id}</p>;
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-14">
        <div className="mx-full">
          <div className="flex justify-between bg-warna4 p-5">
            {/* Gambar mobil */}
            <div className="w-5/12">
              <div className="w-96 h-72 px-2 mx-14 bg-warna4 flex items-center ">
                <img src="/images/bmw.jpg" className="" />
              </div>
              {/* Info Mobil */}
              <div className="text-xl font-bold ml-14 mb-1">Info Mobil</div>
              <div className="space-y-2 ml-14">
                <div className="ml-7 space-y-1 mb-2">
                  <div className="font-Allerta">
                    <i className="bi bi-people-fill"></i> Penumpang :{" "}
                    {data.penumpang}
                  </div>
                  <div className="font-Allerta">
                    <i className="bi bi-briefcase-fill"></i> Bagasi :{" "}
                    {data.bagasi} Kg
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
            <div className="w-7/12 ">
              {/* Nama Mobil */}
              <h1 className={` text-4xl font-extrabold md:${"text-3xl"}`}>
                {data.namaMobil}
              </h1>
              {/* transmisi */}
              <div className="bg-warna3 rounded-md my-2 px-1 text-sm max-w-max font-light tracking-wide">
                {data.transmisi ? "Manual" : "Matic"}
              </div>
              {/* Harga Sewa */}
              <div className="bg-warna3 pl-7 py-5 text-lg font-bold my-2">
                Rp. {data.harga} / Hari
              </div>
              {/* Info Mobil */}

              {/* Info Rental */}
              <div className="text-xl font-bold mb-1">Info Rental</div>
              <div className="space-y-2">
                {/* Keuntungan */}
                <div className="ml-7 space-y-1">
                  <div className="font-Allerta font-semibold">Keuntungan</div>
                  <div className="font-Allerta">
                    <i className="bi bi-shield-check"></i> Sudah termasuk
                    asuransi
                  </div>
                  <div className="font-Allerta">
                    <i className="bi bi-stopwatch"></i> 24/7 Customer service
                  </div>
                </div>
                {/* Syarat Sewa */}
                <div className="ml-7 space-y-1">
                  <div className="font-Allerta font-semibold">Persyaratan</div>
                  <div className="font-Allerta">
                    <i className="bi bi-card-checklist"></i> Data diri
                    <div className="ml-5 grid grid-cols-2 gap-x-0 w-4/12">
                      <div className="font-Allerta text-sm font-light">
                        <i className="bi bi-check-lg"></i> KTP
                      </div>
                      <div className="font-Allerta text-sm font-light">
                        <i className="bi bi-check-lg"></i> SIM A
                      </div>
                      <div className="font-Allerta text-sm font-light">
                        <i className="bi bi-check-lg"></i> No Handphone
                      </div>
                      <div className="font-Allerta text-sm font-light">
                        <i className="bi bi-check-lg"></i> Lainnya
                      </div>
                    </div>
                  </div>
                  <div className="font-Allerta">
                    <i className="bi bi-telephone"></i> Membayar setelah memesan
                  </div>
                </div>
                <Link href={`/pesan/${data.id}`}>
                  <button
                    type="button"
                    className="text-warna4 bg-warna1 hover:bg-warna3 hover:text-warna1 focus:ring-4 focus:ring-warna2 font-medium rounded-md text-md px-16 py-2.5 text-center mr-2 mb-2 mt-3"
                  >
                    Pesan Sekarang
                  </button>
                </Link>
                {/* ff */}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default detail;
