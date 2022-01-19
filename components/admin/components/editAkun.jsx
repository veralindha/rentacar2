const editAkun = () => {
  return (
    <>
      <div className="container mx-auto place-content-center">
        <div className="row">
          <div className="grid place-items-center p-40">
            <div className="p-6 max-w-sm bg-white rounded-lg border border-warna1 shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 grid place-items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white place-items-center">
                Edit Akun
              </h5>
              <div className="font-normal text-gray-700 dark:text-gray-400 grid place-items-center ">
                <div>
                  <input
                    type="text"
                    placeholder=" Username"
                    className="h-9 m-2 border border-warna1 rounded-md"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder=" Email"
                    className="h-9 m-2 border border-warna1 rounded-md"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder=" Password"
                    className="h-9 m-2 border border-warna1 rounded-md"
                    required
                  />
                </div>
                <div className="">
                  <button
                    className="bg-warna1 rounded-md w-36 p-1 text-sm text-warna4 mt-6"
                    type="submit"
                  >
                    Edit AKUN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default editAkun;
