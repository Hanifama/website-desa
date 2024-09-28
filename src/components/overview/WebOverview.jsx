import React from 'react';
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
  {
    title: "UMKM Desa",
    icon: <FaStore className="inline-block mb-4 text-4xl text-[#558b2f]" />,
    bgColor: "bg-gradient-to-tr from-[#32CD32] to-[#228B22 ]",
    textColor: "#32CD32",
  },
];

export default function WebsiteOverview() {
  return (
    <section className="relative py-10 px-6 flex flex-col md:flex-row gap-8 bg-gradient-to-b from-[#d0e6cf] to-[#d7e8e4]"> {/* Hijau lembut ke biru abu */}
      <div className="flex-1 max-w-7xl">
        <p className="max-w-max py-2 mb-2 text-base font-bold text-white bg-[#4a6b47] rounded-full px-4"> {/* Hijau daun tua */}
          Website Desa
        </p>
        <h2 className="text-3xl font-extrabold leading-tight text-[#3a4e3b] mb-4"> {/* Hijau daun tua */}
          Apa Yang Tersedia <span className="text-[#ff7849]">Website Desa?</span> {/* Sentuhan oranye */}
        </h2>
        <p className="text-gray-700 leading-6 mb-6">
          Website desa kami memberikan akses mudah ke berita terbaru, kegiatan mendatang, dan informasi tentang fasilitas desa. Temukan layanan masyarakat, jadwal acara, dan detail wisata dengan cepat dan praktis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[600px] w-full">

        <div className={`${services[0].bgColor} p-6 rounded-full shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-110 hover:shadow-2xl`}>
          {services[0].icon}
          <h4 className={`text-xl font-bold text-center ${services[0].textColor}`}>{services[0].title}</h4>
        </div>

        <div className={`${services[1].bgColor} p-6 rounded-full shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-110 hover:shadow-2xl`}>
          {services[1].icon}
          <h4 className={`text-xl font-bold text-center ${services[1].textColor}`}>{services[1].title}</h4>
        </div>

        <div className={`col-span-1 md:col-span-2 ${services[2].bgColor} p-6 rounded-full shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-2xl`}>
          {services[2].icon}
          <h4 className={`text-xl font-bold text-center ${services[2].textColor}`}>{services[2].title}</h4>
        </div>
      </div>
    </section>

  );
}
