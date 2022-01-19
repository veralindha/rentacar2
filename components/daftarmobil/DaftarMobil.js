import Mobil from "./mobil";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function DaftarMobil() {
  const { data, error } = useSWR("/api/mobil", fetcher);
  if (error) return <p>Ada masalah saat fetching data</p>;
  if (!data) return <p>Loading...</p>;
  if (data.length == 0) return <p>Belum ada data kontak</p>;
  return (
    <>
      <div className="container mx-auto flex justify-between items-center mt-14">
        <h1
          className={`font-BalooChettan2 text-4xl font-extrabold md:${"text-3xl"}`}
        >
          Daftar Mobil
        </h1>
      </div>
      {/* daftar mobil */}
      <div className="container mx-auto mt-8">
        <div className="overflow-auto h-96">
          <div className={`grid grid-cols-3 gap-8 `}>
            {/* kotak */}
            {data.map((mobil, index) => {
              return (
                <>
                  <Mobil mobil={mobil} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
