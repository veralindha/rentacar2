import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initFormValues = {
  image: "",
  namaMobil: "",
  transmisi: "",
  harga: "",
  jumlahPenumpang: "",
};
const handleOnSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const skemaValidasi = Yup.object({
  image: Yup.string.required("Upload Image !"),
  namaMobil: Yup.string().required("Nama mobil harus diisi"),
  transmisi: Yup.string().required("Pilih jenis transmisi"),
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
        {({ isSubmitting }) => (
          <Form>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                Tambahkan Data Mobil
              </h2>
              <label className="block text-sm">
                <span className="text-gray-700 dark:text-gray-400">
                  Masukan Gambar :{" "}
                </span>
                <Field type="file" name="image" id="" />
                <ErrorMessage name="image" component={PesanError} />
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
                  class="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple m-6"
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
