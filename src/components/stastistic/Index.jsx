import { useEffect, useState } from "react";
import { fetchVillageActivities, fetchVillageNews, fetchVillageUMKM } from "../../helpers/service";

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="flex flex-col items-center p-6 md:p-24 space-y-8">
            <div className="flex flex-row gap-4 md:gap-8 items-center justify-center flex-wrap">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h4 className="text-3xl md:text-4xl font-semibold text-primary-color mb-2">{displayedStatistics.berita}</h4>
                    <p className="text-lg md:text-xl text-dark text-center">Berita dan Informasi</p>
                </div>
                <div className="border-t md:border-l md:border-t-0 border-gray-300 h-16 md:h-24 w-full md:w-[1px]"></div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h4 className="text-3xl md:text-4xl font-semibold text-primary-color mb-2">{displayedStatistics.umkm}</h4>
                    <p className="text-lg md:text-xl text-dark text-center">UMKM Desa</p>
                </div>
                <div className="border-t md:border-l md:border-t-0 border-gray-300 h-16 md:h-24 w-full md:w-[1px]"></div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h4 className="text-3xl md:text-4xl font-semibold text-primary-color mb-2">{displayedStatistics.kegiatan}</h4>
                    <p className="text-lg md:text-xl text-dark text-center">Kegiatan dan Acara</p>
                </div>
            </div>
        </section>
    );
}
