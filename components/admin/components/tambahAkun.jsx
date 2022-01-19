import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initFormValues = {
  username: "",
  email: "",
  password: "",
};
const handleOnSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const skemaValidasi = Yup.object({
  username: Yup.string().required("Nama lengkap harus diisi"),
  email: Yup.string().email("Format email salah").required("Email harus diisi"),
  password: Yup.password().required("Password harus diisi"),
});
// Custom component untuk pesan error
const PesanError = (props) => (
  <div className="form-text text-warna2">{props.children}</div>
);
const tambahAkun = () => {
  return (
    <>
      <Formik
        initialValues={initFormValues}
        onSubmit={handleOnSubmit}
        validationSchema={skemaValidasi}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="container mx-auto place-content-center">
              <div className="row">
                <div className="grid place-items-center p-40">
                  <div className="p-6 max-w-sm bg-white rounded-lg border border-warna1 shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 grid place-items-center">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white place-items-center">
                      Tambah Akun
                    </h5>
                    <div className="font-normal text-gray-700 dark:text-gray-400 grid place-items-center ">
                      <div>
                        <Field
                          type="text"
                          placeholder=" Username"
                          className="h-9 m-2 border border-warna1 rounded-md"
                          required
                        />
                        <ErrorMessage name="username" component={PesanError} />
                      </div>
                      <div>
                        <Field
                          type="email"
                          placeholder=" Email"
                          className="h-9 m-2 border border-warna1 rounded-md"
                          required
                        />
                        <ErrorMessage name="email" component={PesanError} />
                      </div>
                      <div>
                        <Field
                          type="password"
                          placeholder=" Password"
                          className="h-9 m-2 border border-warna1 rounded-md"
                          required
                        />
                        <ErrorMessage name="nama" component={PesanError} />
                      </div>
                      <div className="">
                        <button
                          className="bg-warna1 rounded-md w-36 p-1 text-sm text-warna4 mt-6"
                          type="submit"
                        >
                          + TAMBAH AKUN
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default tambahAkun;
