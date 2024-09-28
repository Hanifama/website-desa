import { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import defaultLogo from '../../assets/defaultLogo.jpg';

export default function Navbar({ data, scrollToSection, refs }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleImageError = (event) => {
    event.target.src = defaultLogo;
  };

  return (
    <nav className="bg-[#1e3a5f] text-white p-4 shadow-md fixed top-0 left-0 w-full z-50 animate-fadeIn">
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
              <span className="text-xl">{data.name || 'Default Name'}</span>
              <span className="text-sm">{data.district || 'Default District'}</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex md:items-center space-x-6 px-10">
          {['Home', 'Aparat Desa', 'Berita Desa', 'UMKM Desa', 'Kegiatan Desa'].map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(refs[item.toLowerCase().replace(/\s/g, '') + 'Ref'])}
              className="hover:text-[#f4c430] transition duration-300 ease-in-out transform hover:scale-105"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="https://kawal-desa.pptik.id/login">
            <button className="bg-[#f4c430] text-[#1e3a5f] px-4 py-2 rounded-lg font-semibold hover:bg-[#e0b728] transition-colors duration-300">
              Login
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl text-[#f4c430] focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mt-4 transition-transform duration-300 ${isMobileMenuOpen ? "block" : "hidden transform -translate-y-4"}`}>
        <ul className="flex flex-col space-y-2 bg-[#2c4a77] p-4 rounded-lg shadow-lg">
          {['Home', 'Aparat Desa', 'Berita Desa', 'UMKM Desa', 'Kegiatan Desa'].map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  toggleMobileMenu();
                  scrollToSection(refs[item.toLowerCase().replace(/\s/g, '') + 'Ref']);
                }}
                className="w-full block py-3 px-4 text-white rounded transition-colors duration-300 transform hover:bg-[#3b5a8c] hover:scale-105"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <Link to="https://kawal-desa.pptik.id/login">
            <button className="w-full py-3 bg-[#f4c430] text-[#1e3a5f] rounded-lg font-semibold hover:bg-[#e0b728] transition-colors duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
