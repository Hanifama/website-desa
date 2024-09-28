import defaultImg from '../../assets/default.jpg';

export default function VillageMarket({data}) {  
  const dataProdukUMKM = data || [];

  
  if (dataProdukUMKM.length === 0) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-700">
            Tidak ada produk UMKM untuk saat ini.
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            UMKM Desa Kami
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-2">
            Temukan berbagai usaha mikro, kecil, dan menengah di desa kami. Dukung mereka dengan membeli produk lokal yang unik dan berkualitas!
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dataProdukUMKM.slice(0, 4).map((item, index) => (
            <div key={index} className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white h-64">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={item.file ? `https://bucket-2.nos.wjv-1.neo.id/${item.file}` : defaultImg}
                alt={`UMKM ${item.name}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {dataProdukUMKM.slice(4).map((item, index) => (
            <div key={index} className="relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white h-64">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={item.file ? `https://bucket-2.nos.wjv-1.neo.id/${item.file}` : defaultImg}
                alt={`UMKM ${item.name}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-1 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
