import { RiNewspaperLine } from 'react-icons/ri';

export default function News({data}) {
  const newsData = data || [];


  const shouldScroll = newsData.length > 2;

  return (
    <section className="relative h-screen overflow-hidden py-16 px-6 lg:px-16 bg-gradient-to-r from-gray-100 to-white text-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none">
          <path fillOpacity="0.1" d="M0,128L1440,64L1440,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between">

        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 leading-tight text-red-700">
            Berita Desa Terbaru
          </h2>
          <p className="text-base lg:text-lg mb-6 leading-relaxed">
            Jelajahi berita terbaru dari desa kami, mulai dari festival budaya hingga pertemuan lokal. Temukan apa yang membuat komunitas kami unik dan dinamis.
          </p>
        </div>

        <div className={`lg:w-1/2 mt-8 lg:mt-0 ${shouldScroll ? 'overflow-x-scroll scrollbar-hide' : ''}`}>
          <div className={`flex ${shouldScroll ? 'flex-nowrap' : 'flex-wrap'} gap-4 md:gap-6`}>
            {newsData.length === 0 ? (
              <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg ml-10 p-4 text-center text-gray-700">
                <RiNewspaperLine className="text-red-500 w-8 h-8 mx-auto mb-2" />
                <p>Belum ada berita yang tersedia.</p>
              </div>
            ) : (
              newsData.map((newsItem) => (
                <div
                  key={newsItem._id}
                  className="flex-shrink-0 w-64 sm:w-72 md:w-64 bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  <img
                    src={newsItem.file ? `https://bucket-2.nos.wjv-1.neo.id/${newsItem.file}` : newsItem.file}
                    alt={newsItem.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{newsItem.name}</h3>
                    <p className="text-sm md:text-base text-gray-700 mb-4">
                      {newsItem.description}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
