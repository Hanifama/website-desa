import defaultImg from '../../assets/default.jpg';

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
    <div className="container min-w-full h-screen pt-28 bg-gradient-to-r from-[#1e3a5f] via-[#2c4a77] to-[#3b5a8c]">      
      <div className="outer-container hidden md:flex flex-col md:flex-row">
        <div className="container__right min-w-[950px] flex-2 bg-gradient-to-r from-[#2c4a77] via-[#3b5a8c] to-[#5a7ea5] p-8 flex ml-8 rounded-lg shadow-xl animate-openFromCenter">
          <div className="content flex-1 text-left space-y-4 pr-8 opacity-0 animate-fadeInText">
            <h4 className="text-lg font-semibold text-[#f4c430] uppercase tracking-wide">
              {profileData.province || 'Province Not Available'} - {profileData.district || 'District Not Available'}
            </h4>
            <h2 className="text-4xl font-extrabold text-[#ffffff] leading-tight relative">
              {profileData.name || 'Village Name Not Available'}
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#f4c430]"></span>
            </h2>
            <h3 className="text-xl font-medium text-[#e5e7eb] mb-2">
              {profileData.village || 'Village Not Available'}
            </h3>
            <p className="leading-relaxed text-[#e5e7eb] max-w-md text-justify">
              {profileData.address || 'Address Not Available'}
            </p>
          </div>

          <div className="images relative flex items-center justify-center h-[400px] opacity-0 animate-fadeInImages">
            <img
              src={profileData.banner ? `https://bucket-2.nos.wjv-1.neo.id/${profileData.banner}` : defaultProfile.banner}
              alt="Pemandangan Desa Image"
              onError={handleImageError}
              className="tent-1 absolute top-1/2 transform -translate-y-1/2 translate-x-12 max-h-[400px] max-w-[350px] rounded-lg shadow-2xl border border-[#f4c430] transition-transform duration-300 hover:scale-105"
            />
            <img
              src={profileData.office ? `https://bucket-2.nos.wjv-1.neo.id/${profileData.office}` : defaultProfile.office}
              alt="Balai Desa"
              onError={handleImageError}
              className="tent-2 absolute top-1/2 transform translate-y-1/2 translate-x-1/2 max-w-[180px] rounded-lg shadow-lg border border-[#f4c430] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
      
      <div className=" px-4 flex flex-col md:hidden text-left space-y-4">
        <h4 className="text-lg font-semibold text-[#f4c430] uppercase tracking-wide">
          {profileData.province || 'Province Not Available'} - {profileData.district || 'District Not Available'}
        </h4>
        <h2 className="text-4xl font-extrabold text-[#ffffff] leading-tight relative">
          {profileData.name || 'Village Name Not Available'}
          <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#f4c430]"></span>
        </h2>
        <h3 className="text-xl font-medium text-[#e5e7eb] mb-2">
          Desa {profileData.village || 'Village Not Available'}
        </h3>       

        <div className="images relative flex flex-col items-center justify-center h-[400px] opacity-0 animate-fadeInImages">
          <img
            src={profileData.banner ? `https://bucket-2.nos.wjv-1.neo.id/${profileData.banner}` : defaultProfile.banner}
            alt="Pemandangan Desa Image"
            onError={handleImageError}
            className="tent-1 max-h-[400px] max-w-[350px] rounded-lg shadow-2xl border border-[#f4c430] transition-transform duration-300 hover:scale-105"
          />
          <img
            src={profileData.office ? `https://bucket-2.nos.wjv-1.neo.id/${profileData.office}` : defaultProfile.office}
            alt="Balai Desa"
            onError={handleImageError}
            className="tent-2 max-w-[180px] rounded-lg shadow-lg border border-[#f4c430] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
