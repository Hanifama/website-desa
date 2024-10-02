import { FaLeaf, FaHome, FaChartBar } from 'react-icons/fa';

export default function Statistic({data}) {
    const profileData = data || defaultProfile;

    return (
        <div className="info-cards mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
            <div className="bg-[#e6f7f5] shadow-md rounded-lg p-6 flex flex-col items-center w-full"> 
                <FaLeaf className="text-4xl mb-2 text-[#5c6d3e]" /> 
                <div className="flex items-center">
                    
                    <h3 className="text-xl font-semibold text-[#3b3b30]">Berita dan Informasi</h3>
                </div>
                <p className="text-gray-600">Informasi mengenai berita terbaru.</p>
            </div>
            <div className="bg-[#e6f7f5] shadow-md rounded-lg p-6 flex flex-col items-center w-full">
                <FaHome className="text-4xl mb-2 text-[#5c6d3e]" />
                <div className="flex items-center">                    
                    <h3 className="text-xl font-semibold text-[#3b3b30]">Selamat Datang di</h3>
                </div>
                    <h4 className="text-xl font-semibold text-[#4f5d2f] mb-0 ml-2">{profileData.name}</h4>                
            </div>
            <div className="bg-[#e6f7f5] shadow-md rounded-lg p-6 flex flex-col items-center w-full">
                <FaChartBar className="text-4xl mb-2 text-[#5c6d3e]" />
                <div className="flex items-center">                    
                    <h3 className="text-xl font-semibold text-[#3b3b30]">Kegiatan dan Acara</h3>
                </div>
                <p className="text-gray-600">Kegiatan menarik dan terbaru</p>
            </div>
        </div>

    );
}
