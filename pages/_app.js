import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rentacar</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* Allerta, Baloo Chettan 2, DM Sans, Poppins*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Allerta&family=Baloo+Chettan+2&family=DM+Sans&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
