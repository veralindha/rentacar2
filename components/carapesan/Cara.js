import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function CaraPesan() {
  const { data, error } = useSWR("api/cara", fetcher);
  if (error) return <p>Ada masalah saat fetching data</p>;
  if (!data) return <p>Loading..</p>;
  if (data.length == 0) return <p>Data masih kosong</p>;
  return (
    <>
      <div className="container mx-auto mt-14">
        <h1 className="font-BalooChettan2 text-4xl font-extrabold">
          Cara Pemesanan
        </h1>
        <div className="leading-8 font-semibold">
          Mulai rental dengan 3 langkah mudah
        </div>
        {/* Section 3 Kotak */}
        <div className="container mx-auto flex mt-8 justify-between">
          {data.map((caranya, index) => {
            return (
              <>
                <div
                  className={`w-[250px] h-40 bg-warna1 rounded-md p-2 md:${"w-[100px]"}`}
                >
                  {/* dalam kotak */}
                  <div
                    key={index}
                    className="container mx-auto flex items-center justify-between"
                  >
                    <div className="text-warna4 font-extrabold text-3xl text-center font-BalooChettan2 ml-3">
                      {index + 1}
                    </div>

                    <div className="h-8 bg-warna3 w-48 text-center text-2xl rounded-md font-bold font-BalooChettan2">
                      {caranya.step}
                    </div>
                  </div>
                  {/* deskripsi */}
                  <div className="p-1 h-24 bg-warna4 rounded-md text-sm leading-relaxed mt-2 text-justify">
                    {caranya.deskripsi}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
