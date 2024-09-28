import React from 'react';
import { useVillageProfile } from '../../hooks/useAPI';
import { Link } from 'react-router-dom';
import defaultLogo from '../../assets/defaultLogo.jpg';

export default function Footer({ data, scrollToSection, refs }) {
  const currentYear = new Date().getFullYear();
  const {
    name,
    address,
    email,    
  } = data || {};

  const handleImageError = (event) => {
    event.target.src = defaultLogo;
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">           
          <div className="flex items-center space-x-6 mb-8 border-b border-gray-600 pb-6">
            <Link to="/" className="flex items-center space-x-4 hover:text-gray-100 transition duration-300">
            <img
              src={data.logo ? `https://bucket-2.nos.wjv-1.neo.id/${data.logo}` : defaultLogo}
              alt="Logo Instansi"
              className="w-12 h-12 object-cover"
              onError={handleImageError}
            />
              <div className="flex flex-col">
                <span className="text-2xl font-semibold">{name || 'Default Name'}</span>
                <span className="text-sm">{address || 'Default District'}</span>
              </div>
            </Link>
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Kontak Desa</h3>
            {email ? (
              <p>Email: <a href={`mailto:${email}`} className="hover:text-gray-100">{email}</a></p>
            ) : (
              <p>Email belum tersedia</p>
            )}
          </div>          
          
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Navigasi</h3>
            <div className="grid grid-cols-2">
              <ul className="space-y-2">
                <li>
                  <button 
                    className="hover:text-gray-100 transition duration-300"
                    onClick={() => scrollToSection(refs.newsRef)}
                  >
                    Berita Desa
                  </button>
                </li>
                <li>
                  <button 
                    className="hover:text-gray-100 transition duration-300"
                    onClick={() => scrollToSection(refs.apparatusRef)}
                  >
                    Aparat Desa
                  </button>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <button 
                    className="hover:text-gray-100 transition duration-300"
                    onClick={() => scrollToSection(refs.marketRef)}
                  >
                    UMKM Desa
                  </button>
                </li>
                <li>
                  <button 
                    className="hover:text-gray-100 transition duration-300"
                    onClick={() => scrollToSection(refs.activitiesRef)}
                  >
                    Kegiatan Desa
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr />
        <div className="text-center mt-4">
          <p className="text-sm">© {currentYear} {name || "Kawal Desa"}. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}