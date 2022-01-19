import Link from "next/link";

export default function Mobil(props) {
  return (
    <>
      <div
        key={props.mobil.id}
        className={`w-80 h-96 bg-warna3 p-2 rounded-md md:${"w-50 h-66"}`}
      >
        <div className="w-full h-52 bg-warna4 mx-auto rounded-md">
          <img src={props.mobil.src} className="w-full h-full rounded-md" />
        </div>
        {/* Nama mobil, tipe, harga */}
        <div className="container flex justify-between items-baseline">
          <div className="w-4/6">
            <div className="text-lg font-bold tracking-wide">
              {props.mobil.namaMobil}
            </div>
            <div className="bg-warna4 rounded-md px-1 text-sm max-w-max font-extralight tracking-wide">
              {props.mobil.transmisi ? "Manual" : "Matic"}
            </div>
          </div>
          <div className="text-sm w-2/6">Rp. {props.mobil.harga}/hari</div>
        </div>
        {/* penumpang dan bagasi */}
        <div className="max-w-full flex items-center justify-around mt-3">
          <div className="text-center">
            <div className="font-Allerta text-sm">
              <i className="bi bi-people-fill"></i> Penumpang
            </div>
            <div className="text-sm">{props.mobil.penumpang}</div>
            <Link href={`/detail/${props.mobil.id}`}>
              <button className="bg-warna1 rounded-md w-28 p-1 text-sm text-warna4 mt-6">
                Detail
              </button>
            </Link>
          </div>
          <div className="text-center">
            <div className="font-Allerta text-sm">
              <i className="bi bi-briefcase-fill"></i> Bagasi
            </div>
            <div className="text-sm">{props.mobil.bagasi}</div>
            <Link href={`/pesan/${props.mobil.id}`}>
              <button className="bg-warna1 rounded-md w-28 p-1 text-sm text-warna4 mt-6">
                Pesan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
