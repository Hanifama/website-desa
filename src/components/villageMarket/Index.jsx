import { FaStore } from 'react-icons/fa';
import landscape from '../../assets/tent-1.jpg';
import { useRef } from 'react';

export default function VillageMarket({data}) {
  const dataProdukUMKM = data || [];
  const containerRef = useRef(null);

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
        {/* Product Description */}
        <div className="lg:w-[500px] mb-8 lg:mb-0 lg:order-2">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-center lg:text-left text-red-600">
            Produk UMKM Desa
          </h2>
          <p className="text-sm lg:text-lg mb-6 leading-relaxed text-center lg:text-left text-gray-800 mx-auto lg:mx-0 max-w-lg lg:max-w-xl">
            Temukan berbagai usaha mikro, kecil, dan menengah (UMKM) yang ada di desa kami. Temukan produk-produk lokal yang berkualitas dan dukung para pengusaha lokal yang berperan penting dalam ekonomi desa. Dari kerajinan tangan hingga makanan khas, setiap UMKM menawarkan sesuatu yang unik dan menarik.
          </p>
        </div>

        {/* Product Carousel */}
        <div className="relative lg:w-1/2 lg:order-1">
          <div
            ref={containerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 scrollbar-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {dataProdukUMKM.length === 0 ? (
              <div className="flex flex-col items-center p-5 justify-center w-full h-64 bg-white rounded-lg shadow-xl text-gray-700">
                <FaStore className="text-4xl mb-2" />
                <p className="text-lg">Belum ada UMKM yang tersedia</p>
              </div>
            ) : (
              dataProdukUMKM.map((UMKM) => (
                <div
                  key={UMKM._id}
                  className="relative w-full lg:w-64 h-64 bg-white rounded-lg shadow-xl border border-red-300 overflow-hidden flex-shrink-0 snap-start"
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
              ))
            )}
          </div>
          {dataProdukUMKM.length > 4 && (
            <>
              <button
                onClick={() => handleScroll('left')}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white rounded-full shadow-lg transition duration-300"
                style={{ left: '-1.2rem' }}
              >
                &#9664;
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white rounded-full shadow-lg transition duration-300"
                style={{ right: '-1.2rem' }}
              >
                &#9654;
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
