import defaultImg from '../../assets/default.jpg';
import Statistic from '../stastistic/Index';

export default function Header({data}) {

  const defaultProfile = {
    province: 'Default Province',
    name: 'Default Village Name',
    village: 'Default Village',
    address: 'Default Address',
    banner: defaultImg,
    office: defaultImg,
  };

  const profileData = data || defaultProfile;

  const handleImageError = (event) => {
    event.target.src = defaultImg;
  };

  return (
    <div className="container min-w-full h-auto py-20 pt-28 bg-gradient-to-r from-[#e0f7fa] to-[#ffffff]">
      <div className="outer-container flex flex-col md:flex-row justify-center items-center md:items-start w-full">
        <div className="container__right flex flex-col md:flex-row p-6 md:p-8 w-full">          
          <div className="content flex-1 text-left space-y-2 py-8 px-10">
            <h4 className="text-sm font-semibold text-[#b95f30] uppercase tracking-wide">
              {profileData.province} - {profileData.district}
            </h4>
            <h2 className="text-2xl md:text-5xl font-extrabold text-[#4a3f3f] leading-tight relative">
              {profileData.name}
              <span className="absolute top-10 md:top-12 left-0 w-12 h-1 bg-[#b95f30]"></span>
            </h2>
            <p className="leading-relaxed text-[#5a5a5a] max-w-md">
              {/* Desa {profileData.village} */}
            </p>
          </div>

          <div className="images relative flex flex-col md:flex-row items-center justify-center h-auto">
            <img
              src={profileData.banner ? `https://bucket-2.nos.wjv-1.neo.id/${profileData.banner}` : defaultProfile.banner}
              alt="Pemandangan Desa"
              onError={handleImageError}
              className="relative max-h-[400px] max-w-full md:max-w-[400px] rounded-lg shadow-md border border-[#b95f30] transition-transform duration-300 hover:scale-105 mb-4 md:mb-0 md:mr-4"
            />
          </div>
        </div>
      </div>

      <Statistic />
    </div>
  );
}
