import { useEffect, useState } from "react";
import { fetchVillageActivities, fetchVillageNews, fetchVillageUMKM } from "../../helpers/service";
import { FaNewspaper, FaStore, FaCalendarAlt } from 'react-icons/fa';

const services = [
  {
    title: "Berita dan Informasi",
    icon: <FaNewspaper className="inline-block mb-4 text-4xl text-[#d84315]" />,
    bgColor: "bg-gradient-to-tr from-[#32CD32] to-[#228B22 ]",
    textColor: "#32CD32",
  },
  {
    title: "Kegiatan dan Acara",
    icon: <FaCalendarAlt className="inline-block mb-4 text-4xl text-[#3e2723]" />,
    bgColor: "bg-gradient-to-tr from-[#32CD32] to-[#228B22 ]",
    textColor: "#32CD32",
  },
  // {
  //   title: "UMKM Desa",
  //   icon: <FaStore className="inline-block mb-4 text-4xl text-[#558b2f]" />,
  //   bgColor: "bg-gradient-to-tr from-[#32CD32] to-[#228B22 ]",
  //   textColor: "#32CD32",
  // },
];

export default function WebsiteOverview({data}) {
  const profileData = data || defaultProfile;
    const [statistics, setStatistics] = useState({
        berita: 0,
        umkm: 0,
        kegiatan: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [displayedStatistics, setDisplayedStatistics] = useState({
        berita: 0,
        umkm: 0,
        kegiatan: 0,
    });

    const fetchStatistics = async () => {
        try {
            const [umkmData, newsData, activitiesData] = await Promise.all([
                fetchVillageUMKM(),
                fetchVillageNews(),
                fetchVillageActivities(),
            ]);

            setStatistics({
                berita: newsData.data.length || 0,
                umkm: umkmData.total || 0,
                kegiatan: activitiesData.data.length || 0,
            });
        } catch (err) {
            setError("Error fetching data");
        } finally {
            setLoading(false);
        }
    };

    const displayRandomNumbers = () => {
        const duration = 1500;
        const interval = 50;
        const iterations = duration / interval;

        let count = 0;
        const randomInterval = setInterval(() => {
            setDisplayedStatistics({
                berita: Math.floor(Math.random() * 200),
                umkm: Math.floor(Math.random() * 200),
                kegiatan: Math.floor(Math.random() * 200),
            });

            count++;
            if (count >= iterations) {
                clearInterval(randomInterval);
                setDisplayedStatistics(statistics);
            }
        }, interval);
    };

    useEffect(() => {
        fetchStatistics();
    }, []);

    useEffect(() => {
        if (!loading) {
            displayRandomNumbers();
        }
    }, [loading]);

    if (loading) return <p>Mohon Tunggu..</p>;
    if (error) return <p>{error}</p>;
  return (
    <section className="relative py-10 px-6 flex flex-col md:flex-row gap-8 bg-gradient-to-b from-[#d0e6cf] to-[#d7e8e4]">
      <div className="flex-1 max-w-7xl">      
        <p className="max-w-max py-2 mb-2 text-base font-bold text-white bg-[#4a6b47] rounded-full px-4"> 
          Website Desa
        </p>
        <h2 className="text-3xl font-extrabold leading-tight text-[#3a4e3b] mb-4"> 
          Apa Yang Tersedia <span className="text-[#ff7849]">{profileData.name}?</span> 
        </h2>
        <p className="text-gray-700 leading-6 mb-6">
          Website desa kami memberikan akses mudah ke berita terbaru, kegiatan mendatang, dan informasi tentang fasilitas desa. Temukan layanan masyarakat, jadwal acara, dan detail wisata dengan cepat dan praktis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[600px] w-full">

        <div className={`${services[0].bgColor} p-6 shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-110 hover:shadow-2xl`}>
          {services[0].icon}
          <h4 className="text-xl font-semibold text-[#4f5d2f] mb-0 mr-2">{displayedStatistics.kegiatan}</h4>
          <h4 className={`text-xl font-bold text-center ${services[0].textColor}`}>{services[0].title}</h4>
        </div>

        <div className={`${services[1].bgColor} p-6 shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-110 hover:shadow-2xl`}>
          {services[1].icon}
          <h4 className="text-xl font-semibold text-[#4f5d2f] mb-0 mr-2">{displayedStatistics.berita}</h4> 
          <h4 className={`text-xl font-bold text-center ${services[1].textColor}`}>{services[1].title}</h4>
        </div>

        {/* <div className={`col-span-1 md:col-span-2 ${services[2].bgColor} p-6 rounded-full shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-2xl`}>
          {services[2].icon}

          <h4 className={`text-xl font-bold text-center ${services[2].textColor}`}>{services[2].title}</h4>
        </div> */}
      </div>
    </section>

  );
}
