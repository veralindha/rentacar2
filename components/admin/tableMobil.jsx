import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const hapusKontak = async (idMobil, nama) => {
  let setuju = confirm(`Hapus data mobil ${nama}?`);
  if (setuju) {
    const data = { id: idMobil };
    const respon = await fetch("/api/hapus", {
      method: "POST",
      body: JSON.stringify(data),
    });
    let status = await respon.json();
    if (status != null) {
      location.reload();
    }
  }
};

const TableMobil = () => {
  const { data, error } = useSWR("/api/mobil", fetcher);
  if (error) return <p>Ada masalah saat fetching data</p>;
  if (!data) return <p>Loading...</p>;
  if (data.length == 0) return <p>Belum ada data kontak</p>;
  return (
    <>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Data Mobil
        </h2>

        <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
          <div>
            <Link href="/admin/tambahmobil">
              <button className="px-3 py-1 w-40 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Tambahkan Mobil +
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Nama Mobil</th>
                <th className="px-4 py-3">Jenis Transmisi</th>
                <th className="px-4 py-3">Harga</th>
                <th className="px-4 py-3">Jumlah Penumpang</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {data.map((mobil, index) => {
                return (
                  <>
                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          {/* Avatar with inset shadow */}
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">{mobil.namaMobil}</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              10x Developer
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {mobil.transmisi ? "Manual" : "Matic"}
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          {mobil.harga}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">{mobil.penumpang}</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4">
                          <div>
                            <button
                              className="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                              onClick={(event) => {
                                event.preventDefault();
                                hapusKontak(mobil.id, mobil.namaMobil);
                              }}
                            >
                              Hapus
                            </button>
                          </div>
                          <div>
                            <Link href={`/admin/editmobil/${mobil.id}`}>
                            <button
                              className="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                              
                            >
                              Update
                            </button>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default TableMobil;
