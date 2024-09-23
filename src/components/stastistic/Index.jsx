export default function Stastistic() {
    return (
        <section className="relative px-6 bg-white text-gray-800">
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none">
                    <path fill="#e5e7eb" fillOpacity="10" d="M0,96L1440,256L1440,0L0,0Z"></path>
                    
                </svg>
            </div>
            <div className="relative container mx-auto flex flex-col items-center">
                
                <div className="bg-white p-8 shadow-lg max-w-4xl w-full">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
                        Apa Yang Tersedia Web Desa?
                    </h2>
                    <p className="text-base lg:text-lg text-gray-700 mb-6 leading-relaxed text-center">
                        Website desa kami memberikan akses mudah ke berita terbaru, kegiatan mendatang, dan informasi tentang fasilitas desa. Temukan layanan masyarakat, jadwal acara, dan detail wisata dengan cepat dan praktis.
                    </p>
                </div>
            </div>
        </section>
    )
}