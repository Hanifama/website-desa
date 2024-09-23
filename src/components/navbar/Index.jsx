import { useState } from "react";
import { useVillageProfile } from "../../hooks/useAPI";
import { Link } from 'react-router-dom';

import defaultLogo from '../../assets/defaultLogo.jpg';

export default function Navbar({ scrollToSection, refs }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile, loading, error } = useVillageProfile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleImageError = (event) => {
    event.target.src = defaultLogo;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <nav className="bg-red-600 text-white p-4 shadow-md fixed top-0 left-0 w-full z-50 animate-fadeIn">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center space-x-4">
          <Link to="/" className="flex items-center hover:text-gray-200">
            <img
              src={profile.logo ? `https://bucket-2.nos.wjv-1.neo.id/${profile.logo}` : defaultLogo}
              alt="Logo Instansi"
              className="w-12 h-12 object-cover"
              onError={handleImageError}
            />
            <div className="flex flex-col ml-2">
              <span className="text-xl">{profile.name || 'Default Name'}</span>
              <span className="text-sm">{profile.district || 'Default District'}</span>
            </div>
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6 px-10">
          <li>
            <button
              onClick={() => scrollToSection(refs.homeRef)}
              className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(refs.apparatusRef)}
              className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Aparat Desa
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(refs.newsRef)}
              className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Berita Desa
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(refs.marketRef)}
              className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              UMKM Desa
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(refs.activitiesRef)}
              className="hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Kegiatan Desa
            </button>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link to="https://kawal-desa.pptik.id/login">
            <button className="bg-[#f4c430] text-[#1e3a5f] px-4 py-2 rounded-lg font-semibold hover:bg-[#e0b728] transition-colors duration-300">
              Login
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl text-[#f4c430]">
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>

      <div className={`md:hidden mt-4 space-y-2 ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-2">
          <li>
            <button
              onClick={() => {
                toggleMobileMenu();
                scrollToSection(refs.homeRef);
              }}
              className="block py-2 px-4 bg-[#2c4a77] text-white rounded hover:bg-[#3b5a8c] transition-colors duration-300 transform hover:scale-105"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                toggleMobileMenu();
                scrollToSection(refs.apparatusRef);
              }}
              className="block py-2 px-4 bg-[#2c4a77] text-white rounded hover:bg-[#3b5a8c] transition-colors duration-300 transform hover:scale-105"
            >
              Aparat Desa
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                toggleMobileMenu();
                scrollToSection(refs.newsRef);
              }}
              className="block py-2 px-4 bg-[#2c4a77] text-white rounded hover:bg-[#3b5a8c] transition-colors duration-300 transform hover:scale-105"
            >
              Berita Desa
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                toggleMobileMenu();
                scrollToSection(refs.marketRef);
              }}
              className="block py-2 px-4 bg-[#2c4a77] text-white rounded hover:bg-[#3b5a8c] transition-colors duration-300 transform hover:scale-105"
            >
              UMKM Desa
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                toggleMobileMenu();
                scrollToSection(refs.activitiesRef);
              }}
              className="block py-2 px-4 bg-[#2c4a77] text-white rounded hover:bg-[#3b5a8c] transition-colors duration-300 transform hover:scale-105"
            >
              Kegiatan Desa
            </button>
          </li>
        </ul>

        <div className="mt-2">
          <Link to="https://kawal-desa.pptik.id/login">
            <button className="w-full py-2 bg-[#f4c430] text-[#1e3a5f] rounded-lg font-semibold hover:bg-[#e0b728] transition-colors duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}