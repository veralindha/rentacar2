import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { supabase } from "../../../features/supabase-client";

const initFormValues = {
  image: null,
  namaMobil: "",
  transmisi: "",
  harga: "",
  jumlahPenumpang: "",
};

const uploadFotoProfil = async (image) => {
  try {
    const fileExt = image.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;
    let { error: uploadError } = await supabase.storage
      .from("rentacar") //sesuaikan dengan nama bucket yang dibuat
      .upload(filePath, image);
    if (uploadError) {
      throw uploadError;
    } else {
      return filePath;
    }
  } catch (error) {
    alert(error.message);
  }
};
const handleOnSubmit = async (values) => {
  let url = "/api/tambah-mobil";
  values.pathFoto = await uploadFotoProfil(values.image);

  const respon = await fetch(url, {
    method: "POST",
    body: JSON.stringify(values),
  });

  let status = await respon.json();
  console.log(status);
  if (status != null) {
    location.replace("/admin/tambahmobil");
  }
};
const skemaValidasi = Yup.object({
  image: Yup.string().required("Upload Image !"),
  namaMobil: Yup.string().required("Nama mobil harus diisi"),
  transmisi: Yup.boolean().required("Pilih jenis transmisi"),
  harga: Yup.number().required("Harga harus diisi"),
  jumlahPenumpang: Yup.number().required("Jumlah penumpang harus diisi"),
});
// Custom component untuk pesan error
const PesanError = (props) => (
  <div className="form-text text-warna2">{props.children}</div>
);

const forms = () => {
  return (
    <>
      <Formik
        initialValues={initFormValues}
        onSubmit={handleOnSubmit}
        validationSchema={skemaValidasi}
      >
        {({ values, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Tambahkan Data Mobil
              </h2>
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Masukan Gambar :{" "}
                </span>
                <input
                  type="file"
                  name="image"
                  id=""
                  accept="image/png, image/jpeg"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
                {values.image ? (
                  <img src={URL.createObjectURL(values.image)} width="100px" />
                ) : (
                  "Belum ada foto yang dipilih"
                )}
                {/* <ErrorMessage name="image" component={PesanError} /> */}
              </label>
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Nama Mobil
                </span>
                <Field
                  className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-Field"
                  placeholder="Nama Mobil"
                  name="namaMobil"
                />
                <ErrorMessage name="namaMobil" component={PesanError} />
              </label>

              <div className="mt-4 text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Transmisi
                </span>
                <div className="mt-2">
                  <label className="inline-flex items-center text-gray-600 dark:text-gray-400">
                    <Field
                      type="radio"
                      className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                      name="transmisi"
                      value="true"
                    />
                    <span className="ml-2">Manual</span>
                  </label>
                  <label className="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
                    <Field
                      type="radio"
                      className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                      name="transmisi"
                      value="false"
                    />
                    <span className="ml-2">Matic</span>
                  </label>
                  <ErrorMessage name="transmisi" component={PesanError} />
                </div>
              </div>

              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Harga /hari
                </span>
                <Field
                  type="number"
                  className="block mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-Field"
                  placeholder="Harga"
                  name="harga"
                />
                <ErrorMessage name="harga" component={PesanError} />
              </label>
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Jumlah Penumpang
                </span>
                <Field
                  type="number"
                  className="block mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-Field"
                  min={2}
                  name="jumlahPenumpang"
                />
                <ErrorMessage name="jumlahPenumpang" component={PesanError} />
              </label>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple m-6"
                >
                  + Tambahkan
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default forms;
