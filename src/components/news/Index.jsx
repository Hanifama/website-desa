import { useState } from 'react';
import { BiCalendar } from 'react-icons/bi';
import defaultImg from '../../assets/default.jpg';

export default function News({ data }) {
  const WORD_LIMIT = 10;

  const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return {
        truncated: words.slice(0, limit).join(' ') + '...',
        isTruncated: true,
      };
    }
    return {
      truncated: text,
      isTruncated: false,
    };
  };

  if (!data || data.length === 0) {
    return (
      <section className="h-screen py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-left">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
              Berita Desa Kami
            </h2>
            <p className="text-xl font-medium text-gray-700 italic mb-2">
              Ikuti perkembangan terbaru dan berita penting dari desa kami.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4 ml-0"></div> 
          </div>
          <div className="text-left py-16">
            <BiCalendar className="mb-4 text-6xl text-green-500" /> 
            <h2 className="text-4xl font-extrabold text-gray-700 mb-2">
              Belum ada berita untuk saat ini.
            </h2>
            <p className="text-lg text-gray-500">
              Silakan cek kembali nanti untuk berita terbaru.
            </p>
          </div>
        </div>
      </section>

    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-left">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
            Berita Desa Kami
          </h2>
          <p className="text-xl font-medium text-gray-700 italic mb-2">
            Ikuti perkembangan terbaru dan berita penting dari desa kami.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4 ml-0"></div> 
        </div>


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => {
            const [isExpanded, setIsExpanded] = useState(false);
            const { truncated, isTruncated } = truncateText(item.description, WORD_LIMIT);

            return (
              <div key={index} className="overflow-hidden">
                <img
                  className="w-full h-48 object-cover"
                  src={item.file ? `https://bucket-2.nos.wjv-1.neo.id/${item.file}` : defaultImg}
                  alt={`Berita Desa ${item.name || item.title}`}
                />
                <div className="p-4">
                  <p className="text-gray-500 text-sm mb-2">
                    {new Date(item.createAt || item.date).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {item.name || item.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {isExpanded ? item.description : truncated}
                  </p>
                  {isTruncated && (
                    <button
                      className="text-green-600 hover:underline font-medium"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? 'Tampilkan Lebih Sedikit' : 'Baca Selengkapnya'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
