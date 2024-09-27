import { FaCalendarAlt } from 'react-icons/fa';

export default function VillageActivities({data}) {
  const activitiesData = data || [];

  if (activitiesData.length === 0) {
    return (
      <section className="h-screen py-16 bg-gray-100">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 mb-2">
            Kegiatan Desa Kami
          </h2>
          <p className="text-xl font-medium text-gray-700 italic mb-2">
            Ikuti berbagai kegiatan seru dan bermanfaat yang diselenggarakan di desa kami.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4"></div>
        </div>
        <div className="container mx-auto py-16 px-6 text-center">
          <FaCalendarAlt className="mx-auto mb-4 text-6xl text-green-500" />
          <h2 className="text-4xl font-extrabold text-gray-700 mb-2">
            Belum ada kegiatan untuk saat ini.
          </h2>
          <p className="text-lg text-gray-500">
            Silakan cek kembali nanti untuk informasi tentang kegiatan terbaru.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
            Kegiatan Desa Kami
          </h2>
          <p className="text-xl font-medium text-gray-700 italic mb-2">
            Ikuti berbagai kegiatan seru dan bermanfaat yang diselenggarakan di desa kami.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {activitiesData.map((activity, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white 
                ${index === 0 ? 'rounded-tl-lg' : ''} 
                ${index === 2 ? 'rounded-tr-lg' : ''} 
                ${index === 3 ? 'rounded-bl-lg' : ''} 
                ${index === 5 ? 'rounded-br-lg' : ''}`}
            >
              <img
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                src={activity.file ? `https://bucket-2.nos.wjv-1.neo.id/${activity.file}` : activity.imgSrc}
                alt={activity.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-semibold">{activity.name}</h3>
                <p className="mt-1 text-sm">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
