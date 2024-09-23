import landscape from '../../assets/tent-1.jpg';
import { useVillageUMKM } from '../../hooks/useAPI';
import { useState, useRef } from 'react';

export default function VillageMarket() {
  const { produkUMKM, loading, error } = useVillageUMKM();
  const dataProdukUMKM = produkUMKM || [];
  const containerRef = useRef(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleScroll = (direction) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen py-20 px-6 lg:px-16 bg-gradient-to-r from-white via-red-100 to-white text-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none">
          <path fillOpacity="0.1" d="M0,256L1440,192L1440,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 scrollbar-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {dataProdukUMKM.map((UMKM) => (
              <div
                key={UMKM._id}
                className="relative w-64 h-64 bg-white rounded-lg shadow-xl border border-red-300 overflow-hidden flex-shrink-0 snap-start"
              >
                <img
                  src={UMKM.file ? `https://bucket-2.nos.wjv-1.neo.id/${UMKM.file}` : landscape}
                  alt={UMKM.name || 'UMKM Product'}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{UMKM.name || 'UMKM Product'}</h3>
                  <p className="text-sm">{UMKM.description || 'Description not available.'}</p>
                </div>
              </div>
            ))}
          </div>
          {dataProdukUMKM.length > 4 && (
            <>
              <button
                onClick={() => handleScroll('left')}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white  rounded-full shadow-lgtransition duration-300"
                style={{ left: '-1.2rem' }}
              >
                &#9664;
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white rounded-full shadow-lgtransition duration-300"
                style={{ right: '-1.2rem' }}
              >
                &#9654;
              </button>
            </>
          )}
        </div>

        <div className="lg:w-[500px] mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-center lg:text-left text-red-600">
            Produk UMKM Desa
          </h2>
          <p className="text-sm lg:text-lg mb-6 leading-relaxed text-center lg:text-left text-gray-800 mx-auto lg:mx-0 max-w-lg lg:max-w-xl">
            Temukan berbagai usaha mikro, kecil, dan menengah (UMKM) yang ada di desa kami. Temukan produk-produk lokal yang berkualitas dan dukung para pengusaha lokal yang berperan penting dalam ekonomi desa. Dari kerajinan tangan hingga makanan khas, setiap UMKM menawarkan sesuatu yang unik dan menarik.
          </p>
          {/* <a
            href="#explore"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Lebih Lengkap
          </a> */}
        </div>
      </div>
    </section>
  );
}
