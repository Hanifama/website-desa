import React from 'react';
import headerBg from '../../assets/header-bg.png';
import defaultImg from '../../assets/tent-1.jpg';


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
    <header
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div
        className="relative isolate overflow-hidden pt-20 lg:h-[90vh] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12"
        id="home"
      >
        <div className="flex-1 max-w-xl flex flex-col items-center lg:items-start text-left lg:text-left py-6 px-6 lg:px-12 z-10">
          <h1 className="text-sm lg:text-2xl font-semibold text-gray-800 mb-2 relative">
            {profileData.province} - {profileData.district}
          </h1>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight font-header relative">
            {profileData.name}
            <span className="block w-12 h-1 bg-red-600 mt-2 mx-auto"></span>
          </h2>

          <p className="text-sm font-semibold text-gray-800 mb-2 relative inline-block">
            Desa {profileData.village}
          </p>
        </div>

        <div className="relative flex-1 max-w-md flex items-center justify-center z-0">          
          <div className="hidden lg:block absolute inset-0 bg-red-600 z-0"></div>

          <div className="w-[600px] h-[400px] relative overflow-hidden rounded-lg shadow-lg border-2 border-gray-200">
            <img
              src={profileData.banner ? `https://bucket-2.nos.wjv-1.neo.id/${profileData.banner}` : defaultProfile.banner}
              alt="Pemandangan Desa Image"
              className="absolute inset-0 w-full p-10 lg:p-0 h-full object-cover"
              onError={handleImageError}
            />
          </div>

          <div className="absolute w-[100px] bottom-[-1px] right-12 lg:bottom-[-60px] lg:left-[20px] lg:w-[100px] lg:h-auto overflow-hidden rounded-lg shadow-lg border-2 border-gray-200 transform -translate-y-1/4">
            <img
              src={profileData.office ? `https://bucket-2.nos.wjv-1.neo.id/${profileData.office}` : defaultProfile.office}
              alt="Balai Desa"
              className="w-full h-auto object-cover"
              onError={handleImageError}
            />
          </div>
        </div>

      </div>

      <div
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 text-2xl p-2 text-white bg-red-600 rounded-full border-4 border-white"
      >
        <i className="ri-arrow-down-line"></i>
      </div>
    </header>
  );
}
