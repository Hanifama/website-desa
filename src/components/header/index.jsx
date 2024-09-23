import React from 'react';
import headerBg from '../../assets/header-bg.png';
import defaultImg from '../../assets/tent-1.jpg';
import { useVillageProfile } from '../../hooks/useAPI';
import Loader from '../_shared/loader';

export default function Header() {
  const { profile, loading, error } = useVillageProfile();

  if (loading) return <div><Loader/></div>;
  if (error) return <div>{error}</div>;

  const defaultProfile = {
    province: 'Default Province',
    name: 'Default Village Name',
    village: 'Default Village',
    address: 'Default Address',
    banner: defaultImg,
    office: defaultImg,
  };

  const profileData = profile || defaultProfile;

  const handleImageError = (event) => {
    event.target.src = defaultImg;
  };

  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div
        className="relative isolate overflow-hidden pt-20 h-[90vh] flex items-center justify-between px-6"
        id="home"
      >
        <div className="flex-1 max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left px-6 lg:px-12 z-10">
          <h1 className="text-3xl lg:text-2xl font-semibold text-gray-800 mb-2 relative">
            {profileData.province}
          </h1>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight font-header relative">
            {profileData.name}
            <span className="block w-12 h-1 bg-red-600 mt-2 mx-auto"></span>
          </h2>

          <p className="text-sm font-semibold text-gray-800 mb-2 relative inline-block">
            Desa {profileData.village}
          </p>

          <p className="text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
          {profileData.village} Adalah sebuah kecamatan  {profileData.address}
          </p>
        </div>

        <div className="relative flex-1 max-w-md flex items-center justify-center z-0 bg-red-600">
          <div className="w-full h-[400px] relative overflow-hidden rounded-lg shadow-lg border-2 border-gray-200">
            <img
              src={profileData.banner ? `https://bucket-2.nos.wjv-1.neo.id/${profileData.banner}` : defaultProfile.banner}
              alt="Pemandangan Desa Image"
              className="absolute inset-0 w-full h-full object-cover"
              onError={handleImageError} 
            />
          </div>

          <div className="absolute bottom-[-60px] left-[20px] w-[100px] h-auto overflow-hidden rounded-lg shadow-lg border-2 border-gray-200 transform -translate-y-1/4">
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
