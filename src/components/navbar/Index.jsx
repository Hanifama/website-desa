import { useEffect, useState } from "react";
import { useVillagedata } from "../../hooks/useAPI";
import { Link } from 'react-router-dom';
import { FiMenu, FiHome, FiUser, FiBell, FiBriefcase, FiClipboard } from "react-icons/fi";
import defaultLogo from '../../assets/defaultLogo.jpg';

export default function Navbar({ data, scrollToSection, refs }) {
  const [isFabMenuOpen, setFabMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleFabMenu = () => {
    setFabMenuOpen(!isFabMenuOpen);
  };

  const handleImageError = (event) => {
    event.target.src = defaultLogo;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fabMenuItems = [
    { label: "Home", ref: refs.homeRef, icon: <FiHome /> },
    { label: "Aparat Desa", ref: refs.apparatusRef, icon: <FiUser /> },
    { label: "Berita Desa", ref: refs.newsRef, icon: <FiBell /> },
    { label: "UMKM Desa", ref: refs.marketRef, icon: <FiBriefcase /> },
    { label: "Kegiatan Desa", ref: refs.activitiesRef, icon: <FiClipboard /> },
  ];

  const navLinks = [
    { name: "Home", ref: refs.homeRef },
    { name: "Aparat Desa", ref: refs.apparatusRef },
    { name: "Berita Desa", ref: refs.newsRef },
    { name: "UMKM Desa", ref: refs.marketRef },
    { name: "Kegiatan Desa", ref: refs.activitiesRef }
  ];

  return (
    <>      
      <nav className="bg-red-600 text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
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
            <Link to="https://kawal-desa.pptik.id/login">
              <button className="bg-[#f4c430] text-[#1e3a5f] px-4 py-2 rounded-lg font-semibold hover:bg-[#e0b728] transition-colors duration-300">
                Login
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <Link to="https://kawal-desa.pptik.id/login">
              <button className="bg-[#f4c430] text-[#1e3a5f] px-4 py-2 rounded-lg font-semibold hover:bg-[#e0b728] transition-colors duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {isMobile && (
        <div className="fixed top-[300px] left-0 transform -translate-x-1/2 flex flex-col items-start z-50">          
          {isFabMenuOpen && (
            <div className="absolute w-[200px] left-full ml-2 flex flex-col space-y-2">
              {fabMenuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(item.ref);
                    toggleFabMenu();
                  }}
                  className="flex items-center bg-gray-400 text-black rounded-lg py-2 px-4 shadow-lg hover:bg-yellow-300 transition-colors duration-300"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </button>
              ))}
            </div>
          )}
          
          <button
            onClick={toggleFabMenu}
            className="bg-gray-600 text-white rounded-lg w-12 h-12 shadow-xl flex items-center justify-center hover:bg-gray-500 transition-colors duration-300"
          >
            <FiMenu className="text-3xl transform rotate-90 transition-transform duration-300" />
          </button>
        </div>
      )}
    </>
  );
}
