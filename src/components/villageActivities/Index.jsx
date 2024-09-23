
import villageActivity from '../../assets/tent-1.jpg'; 
import { useVillageActivities } from '../../hooks/useAPI';


export default function VillageActivities() {
  const { activities, loading, error } = useVillageActivities();
  const activitiesData = activities || [];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="relative h-screen py-20 px-6 lg:px-16 bg-gradient-to-r from-gray-200 via-white to-red-100 text-gray-800">
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" fill="currentColor" preserveAspectRatio="none">
      <path fillOpacity="0.1" d="M0,256L1440,192L1440,320L0,320Z"></path>
    </svg>
  </div>
  <div className="relative container mx-auto flex flex-col lg:flex-row gap-8">
    
    <div className="lg:w-1/3 mb-8 lg:mb-0">
      <h2 className="text-4xl font-extrabold mb-4 text-center lg:text-left text-red-600">
        Kegiatan Desa
      </h2>
      <p className="text-lg mb-6 leading-relaxed text-center lg:text-left text-gray-800">
        Desa kami aktif mengadakan berbagai kegiatan yang mempererat kebersamaan warga. Mulai dari kegiatan sosial, budaya, hingga olahraga, setiap warga terlibat dalam menjaga keharmonisan dan keberlanjutan desa.
      </p>
      {/* <a
        href="#join"
        className="inline-block px-6 py-3 text-lg font-semibold text-red-600 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
      >
        Ikuti Kegiatan Kami
      </a> */}
    </div>
    
    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {activitiesData.map((activity) => (
        <div
          key={activity._id}
          className="relative w-full h-64 bg-white rounded-lg shadow-xl border border-red-300 overflow-hidden transform hover:scale-105 transition duration-300"
        >
          <img
            src={activity.file ? `${"https://bucket-2.nos.wjv-1.neo.id/"}${activity.file}` : villageActivity}
            alt={activity.name || 'Village Activity'}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{activity.description || 'Kegiatan Desa'}</h3>
            <p className="text-sm">{activity.name || 'Deskripsi kegiatan belum tersedia.'}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
