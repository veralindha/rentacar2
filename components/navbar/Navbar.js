import Link from "next/link";

const navlink = [
  { nav: "Home", href: "/" },
  { nav: "Daftar Mobil", href: "/" },
  { nav: "Testimoni", href: "/" },
  { nav: "Tentang Kami", href: "/" },
];
export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="max-w-full mx-auto py-5 bg-warna1">
        <div className="container mx-auto">
          {/* Navigation */}
          <div className="flex items-center justify-between">
            {/* Sebelah kiri / Logo */}
            <div className="text-xl font-DMSans font-semibold text-warna4 italic">
              Rentacar
            </div>
            {/* Sebelah kanan / nav item */}
            <div className="flex items-center space-x-8">
              {navlink.map((item) => {
                return (
                  <Link key={item.nav} href={item.href}>
                    <a className="text-warna4 font-DMSans font-semibold">
                      {item.nav}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
