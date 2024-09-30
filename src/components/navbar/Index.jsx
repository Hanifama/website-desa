import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; 
import defaultLogo from '../../assets/defaultLogo.jpg';

export default function Navbar({ data, scrollToSection, refs }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleImageError = (event) => {
    event.target.src = defaultLogo;
  };

  const navLinks = [
    { name: "Home", ref: refs.homeRef },
    { name: "Aparat Desa", ref: refs.apparatusRef },
    { name: "Berita Desa", ref: refs.newsRef },
    // { name: "UMKM Desa", ref: refs.marketRef },
    { name: "Kegiatan Desa", ref: refs.activitiesRef }
  ];

  return (
    <nav className="bg-[#2f855a] text-white p-4 shadow-md fixed top-0 left-0 w-full z-50 animate-fadeIn">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center space-x-4">
          <Link to="/" className="flex items-center hover:text-gray-200">
            <img
              src={data.logo ? `https://bucket-2.nos.wjv-1.neo.id/${data.logo}` : defaultLogo}
              alt="Logo Instansi"
              className="w-12 h-12 object-cover"
              onError={handleImageError}
            />
            <div className="flex flex-col ml-2">
              <span className="text-lg">{data.name || 'Default Name'}</span>
              <span className="text-sm">{data.district || 'Default District'}</span>
            </div>
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6 px-10">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={`#${link.name.toLowerCase().replace(" ", "")}`}
                onClick={() => scrollToSection(link.ref)}
                className="hover:text-[#f4c430] transition duration-300 ease-in-out transform hover:scale-105"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="https://kawal-desa.pptik.id/login">
            <button className="bg-[#f4c430] text-[#2f855a] px-4 py-2 rounded-lg font-semibold hover:bg-[#e0b728] transition-colors duration-300">
              Login
            </button>
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl text-[#f4c430]">
            {isMobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={closeMobileMenu}></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#2f855a] p-4 z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={`#${link.name.toLowerCase().replace(" ", "")}`}
                onClick={() => {
                  scrollToSection(link.ref);
                  closeMobileMenu();
                }}
                className="block py-2 px-4 text-white rounded hover:bg-[#0f3d26] transition-colors duration-300 transform hover:scale-105"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <a href="https://kawal-desa.pptik.id/login">
            <button className="w-full py-2 bg-[#f4c430] text-[#2f855a] rounded-lg font-semibold hover:bg-[#e0b728] transition-colors duration-300">
              Login
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
