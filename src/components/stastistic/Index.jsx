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
        <section className="flex flex-col items-center p-24 space-y-8">
            <div className="flex gap-8 items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <h4 className="text-4xl font-semibold text-primary-color mb-2">{displayedStatistics.berita}</h4>
                    <p className="text-xl text-dark">Berita dan Informasi</p>
                </div>
                <div className="border-l border-gray-300 h-24"></div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h4 className="text-4xl font-semibold text-primary-color mb-2">{displayedStatistics.umkm}</h4>
                    <p className="text-xl text-dark">UMKM Desa</p>
                </div>
                <div className="border-l border-gray-300 h-24"></div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h4 className="text-4xl font-semibold text-primary-color mb-2">{displayedStatistics.kegiatan}</h4>
                    <p className="text-xl text-dark">Kegiatan dan Acara</p>
                </div>
            </div>
        </section>
    );
}
