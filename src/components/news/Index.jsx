import defaultImg from '../../assets/default.jpg';


export default function News({data}) {
  
  if (!data || data.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-700">
              Tidak ada berita untuk saat ini.
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            Berita Desa Kami
          </h2>
          <p className="text-xl font-medium text-gray-700 italic mb-2">
            Ikuti perkembangan terbaru dan berita penting dari desa kami.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-2"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={item.file ? `https://bucket-2.nos.wjv-1.neo.id/${item.file}` : defaultImg}
                alt={`Berita Desa ${item.name || item.title}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {new Date(item.createAt || item.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
                <p className="text-gray-700 mb-4">{item.description}</p>
                {/* <a href="#" className="text-primary-color hover:underline">Baca Selengkapnya</a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
