import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import useSWR from "swr";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initFormValues = {
  nama: "",
  nomerHandphone: "",
  email: "",
  alamat: "",
  mulaiTanggal: "",
  sampaiTanggal: "",
  sopir: false,
};
const handleOnSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const skemaValidasi = Yup.object({
  name: Yup.string().required("Nama lengkap harus diisi"),
  nomerHandphone: Yup.string().required("Nomer Handphone harus diisi"),
  email: Yup.string().email("Format email salah").required("Email harus diisi"),
  alamat: Yup.string().required("Alamat tidak boleh dikosongi"),
  tanggal: Yup.date().required("Pilih Tanggal"),
});
// Custom component untuk pesan error
const PesanError = (props) => (
  <div className="form-text text-warna2">{props.children}</div>
);

export async function getServerSideProps(context) {
  return { props: { id: context.params.id } };
}

const fetcher = (url) => fetch(url).then((res) => res.json());
const Pesan = (props) => {
  const { data, error } = useSWR(`/api/detail/${props.id}`, fetcher);

  if (error) return <p>Ada masalah saat fetching data kontak dengan ID {id}</p>;
  if (!data) return <p>Loading...</p>;
  if (data.length == 0) return <p>Tidak ditemukan kontak dengan ID {id}</p>;
  return (
    <>
      <Formik
        initialValues={initFormValues}
        onSubmit={handleOnSubmit}
        validationSchema={skemaValidasi}
      >
        {({ isSubmitting }) => (
          <Form>
            <Navbar />
            <div className="container mx-auto mt-14">
              {/* Identitas Mobil */}
              <div className="">
                <div className="w-64 h-52 bg-warna3 flex items-center p-3 mx-auto">
                  <img src="/images/bmw.jpg" className="" />
                </div>
                <div className="flex items-center justify-center mt-3">
                  <h1 className="font-extrabold text-3xl">{data.namaMobil}</h1>
                </div>
                <div className="flex items-center justify-center my-2">
                  <div className="bg-warna3 rounded-lg px-2">
                    {data.transmisi ? "Manual" : "Matic"}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-80 text-center">
                    Mobil ini memiliki kapasitas {data.penumpang} penumpang
                    dengan bagasi mencapai
                    {data.bagasi} Kg
                  </div>
                </div>
              </div>
              <div className="flex mt-10">
                <div className="bg-warna4 w-4/6 px-10">
                  <h1 className="font-extrabold text-4xl">Form Pemesanan</h1>
                  <form className="mt-4">
                    <label className="my-2 text-xl font-Allerta" htmlFor="nama">
                      Nama Lengkap
                    </label>
                    <br />
                    <Field
                      className="my-2 px-4 py-2 rounded-lg w-full"
                      type="text"
                      name="nama"
                      placeholder="Masukan Nama"
                    />
                    <ErrorMessage name="nama" component={PesanError} />
                    <br />
                    <label
                      className="my-2 text-xl font-Allerta"
                      htmlFor="nomerHandphone"
                    >
                      Nomor Handphone
                    </label>
                    <br />
                    <Field
                      className="my-2 px-4 py-2 rounded-lg w-full"
                      type="text"
                      name="nomerHandphone"
                      placeholder="Masukan nomor handphone"
                    />
                    <ErrorMessage
                      name="nomerHandphone"
                      component={PesanError}
                    />
                    <br />
                    <label
                      className="my-2 text-xl font-Allerta"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <br />
                    <Field
                      className="my-2 px-4 py-2 rounded-lg w-full"
                      type="text"
                      name="email"
                      placeholder="Masukan email"
                    />
                    <ErrorMessage name="email" component={PesanError} />
                    <br />
                    <label
                      className=" my-2 text-xl font-Allerta"
                      htmlFor="alamat"
                    >
                      Alamat
                    </label>
                    <br />
                    <Field
                      className="my-2 px-4 py-2 rounded-lg w-full"
                      type="text"
                      name="alamat"
                      placeholder="Masukan alamat"
                    />
                    <ErrorMessage name="alamat" component={PesanError} />
                    <br />
                    {/* input tanggal */}
                    <div className="my-2 flex items-center space-x-4">
                      {/* tanggal */}
                      <div>
                        <label
                          className="text-lg font-Allerta"
                          htmlFor="mulaiTanggal"
                        >
                          Mulai Tanggal
                        </label>
                        <br />
                        <Field
                          className="my-2 px-4 py-2 rounded-lg"
                          type="date"
                          name="mulaiTanggal"
                        />
                        <ErrorMessage name="tanggal" component={PesanError} />
                      </div>
                      <div>
                        <label
                          className="text-lg font-Allerta"
                          htmlFor="sampaiTanggal"
                        >
                          Sampai Tanggal
                        </label>
                        <br />
                        <Field
                          className="my-2 px-4 py-2 rounded-lg"
                          type="date"
                          name="sampaiTanggal"
                        />
                        <ErrorMessage name="tanggal" component={PesanError} />
                      </div>
                    </div>
                    <label className="text-xl font-Allerta" htmlFor="sopir">
                      Tambahan
                    </label>
                    <br />
                    <select
                      className="my-2 px-4 py-2 rounded-lg w-96"
                      name="sopir"
                    >
                      <option value="false">Tanpa Sopir</option>
                      <option value="true">Sopir</option>
                    </select>
                    <br />
                    <button
                      className="text-warna4 bg-warna1 hover:bg-warna2 focus:ring-4 focus:ring-warna3 rounded-lg text-lg px-5 py-3 text-center my-4 w-full"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Pesan Sekarang
                    </button>
                  </form>
                </div>
                {/* Total */}
                <div className="bg-warna4 w-2/6">
                  <div className="space-y-4">
                    <h1 className="font-extrabold text-4xl px-10">Total</h1>
                    <div className="flex justify-between px-16">
                      <div className="text-xl font-Allerta">Harga sewa</div>
                      <div className="text-lg">Rp. {data.harga} x 3</div>
                    </div>
                    <div className="flex justify-between px-16">
                      <div className="text-xl font-Allerta">Tambahan</div>
                      <div className="text-lg">Rp. 50000</div>
                    </div>
                    <div className="px-16">
                      <hr className="" />
                      <div className="flex justify-between">
                        <div className="text-lg font-Allerta">
                          Total Keseluruhan
                        </div>
                        <div className="text-lg">Rp.350000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Footer />
    </>
  );
};
export default Pesan;
