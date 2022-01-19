const forms = () => {
  return (
    <>
      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Tambahkan Data Mobil
        </h2>
        <label className="block text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Masukan Gambar :{" "}
          </span>
          <input type="file" name="" id="" />
        </label>
        <label className="block text-sm">
          <span className="text-gray-700 dark:text-gray-400">Nama Mobil</span>
          <input
            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="Nama Mobil"
          />
        </label>

        <div className="mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Transmisi</span>
          <div className="mt-2">
            <label className="inline-flex items-center text-gray-600 dark:text-gray-400">
              <input
                type="radio"
                className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                name="accountType"
                value="true"
              />
              <span className="ml-2">Manual</span>
            </label>
            <label className="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
              <input
                type="radio"
                className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                name="accountType"
                value="false"
              />
              <span className="ml-2">Matic</span>
            </label>
          </div>
        </div>

        <label className="block text-sm">
          <span className="text-gray-700 dark:text-gray-400">Harga /hari</span>
          <input
            type="number"
            className="block mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            placeholder="Harga"
          />
        </label>
        <label className="block text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Jumlah Penumpang
          </span>
          <input
            type="number"
            className="block mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
            min={4}
          />
        </label>
        <div>
          <button
            type="submit"
            class="px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple m-6"
          >
            + Tambahkan
          </button>
        </div>
      </div>
    </>
  );
};
export default forms;
