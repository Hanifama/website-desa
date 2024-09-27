import { useEffect, useState } from "react";
import { fetchVillageActivities, fetchVillageNews, fetchVillageUMKM } from "../../helpers/service";
import { FaLeaf, FaHome, FaChartBar } from 'react-icons/fa';
import Loader from "../_shared/loader";

export default function Statistic() {
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
        <div className="info-cards mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
            <div className="bg-[#f1f8e9] shadow-md rounded-lg p-6 flex flex-col items-center w-full">
                <FaLeaf className="text-4xl mb-2 text-[#b95f30]" />
                <div className="flex items-center">
                    <h4 className="text-xl font-semibold text-primary-color mb-0 mr-2">{displayedStatistics.berita}</h4>
                    <h3 className="text-xl font-semibold text-[#4a3f3f]">Berita dan Informasi</h3>
                </div>
                <p className="text-gray-600">Informasi mengenai kegiatan terbaru di desa.</p>
            </div>
            <div className="bg-[#f1f8e9] shadow-md rounded-lg p-6 flex flex-col items-center w-full">
                <FaHome className="text-4xl mb-2 text-[#b95f30]" />
                <div className="flex items-center">
                    <h4 className="text-xl font-semibold text-primary-color mb-0 mr-2">{displayedStatistics.umkm}</h4>
                    <h3 className="text-xl font-semibold text-[#4a3f3f]">UMKM Desa</h3>
                </div>
                <p className="text-gray-600">Data statistik penduduk dan ekonomi desa.</p>
            </div>
            <div className="bg-[#f1f8e9] shadow-md rounded-lg p-6 flex flex-col items-center w-full">
                <FaChartBar className="text-4xl mb-2 text-[#b95f30]" />
                <div className="flex items-center">
                    <h4 className="text-xl font-semibold text-primary-color mb-0 mr-2">{displayedStatistics.kegiatan}</h4>
                    <h3 className="text-xl font-semibold text-[#4a3f3f]">Kegiatan dan Acara</h3>
                </div>
                <p className="text-gray-600">Gambar-gambar menarik dari desa.</p>
            </div>
        </div>
    );
}
