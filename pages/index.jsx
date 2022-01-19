import CaraPesan from "../components/carapesan/Cara";
import DaftarMobil from "../components/daftarmobil/DaftarMobil";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
      <div className="max-w-full mx-auto">
        <Navbar />
        <Header />
        <CaraPesan />
        <DaftarMobil />
        <Footer />
      </div>
    </>
  );
}
