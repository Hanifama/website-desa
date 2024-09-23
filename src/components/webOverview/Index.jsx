import React from 'react';

export default function WebsiteOverview (){
  return (
    <section className="h-screen py-18 px-6 flex gap-8">
      {/* Konten utama di sisi kiri */}
      <div className="flex-1 max-w-lg">
        <p className="max-w-max py-2 mb-2 text-base font-semibold text-primary-color border border-primary-color rounded-full">
          Website Desa
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-dark">
          Apa Yang Tersedia <span className="text-[#2c4a77]">Website Desa?</span>
        </h2>
        <p className="text-light leading-6">
          Website desa kami memberikan akses mudah ke berita terbaru, kegiatan mendatang, dan informasi tentang fasilitas desa. Temukan layanan masyarakat, jadwal acara, dan detail wisata dengan cepat dan praktis.
        </p>
        <div>
          {/* Additional content can go here */}
        </div>
      </div>

      {/* Konten utama di sisi kanan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[600px]">
        {/* Container untuk Card pertama dan kedua */}
        <div className="flex flex-col gap-4 md:col-span-1">
          {/* Card pertama di atas */}
          <div className="p-4 rounded-lg shadow-md w-[350px] h-[200px] flex flex-col items-center justify-center bg-white transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
            <span className="inline-block mb-4 text-2xl text-primary-color">
              <i className="ri-pulse-line"></i>
            </span>
            <h4 className="text-xl font-semibold text-dark text-center">Berita Terbaru Desa</h4>
          </div>

          {/* Card kedua di bawah */}
          <div className="z-10 p-4 rounded-lg shadow-md w-[350px] h-[200px] flex flex-col items-center justify-center bg-white transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
            <span className="inline-block mb-4 text-2xl text-primary-color">
              <i className="ri-pencil-ruler-2-line"></i>
            </span>
            <h4 className="text-xl font-semibold text-dark text-center">Kegiatan dan Acara</h4>
          </div>
        </div>

        {/* Card ketiga di kanan (mencakup dua baris) */}
        <div className="h-[420px] w-[350px] flex items-center justify-center">
          <div className="rounded-lg shadow-md w-full h-[200px] flex flex-col items-center justify-center bg-white transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
            <span className="inline-block mb-4 text-2xl text-primary-color">
              <i className="ri-graduation-cap-line"></i>
            </span>
            <h4 className="text-xl font-semibold text-dark text-center">UMKM Desa Kami</h4>
          </div>
        </div>
      </div>
    </section>
  );
};


