import React from 'react';
import { useVillageProfile } from '../../hooks/useAPI';
import { Link } from 'react-router-dom';

export default function Footer({ scrollToSection, refs }) {
  const { profile, loading, error } = useVillageProfile();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const {
    name,
    address,
    email,
    logo
  } = profile || {};

  return (
    <footer className="bg-red-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">           
          <div className="flex items-center space-x-6 mb-8 border-b border-gray-600 pb-6">
            <Link to="/" className="flex items-center space-x-4 hover:text-gray-100 transition duration-300">
              <img
                src={logo ? `https://bucket-2.nos.wjv-1.neo.id/${logo}` : 'Default'}
                alt="Logo Instansi"
                className="w-16 h-16 object-cover shadow-md"
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
          <p className="text-sm">© 2024 {name || "Kawal Desa"}. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}