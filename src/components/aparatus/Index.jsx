import React, { useEffect, useRef, useState } from 'react';
import { useVillageProfile } from '../../hooks/useAPI';
import defaultAparat from '../../assets/user.jpeg';

export default function Apparatus() {
  const scrollContainerRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(3);
  const { aparattus, loading, error } = useVillageProfile();

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const containerWidth = container.scrollWidth / 2;
      const scrollAmount = containerWidth;
      let scrollPosition = 0;

      function scroll() {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= scrollAmount) {
          scrollPosition = 0;
        }
        container.style.transform = `translateX(-${scrollPosition}px)`;
        requestAnimationFrame(scroll);
      }

      scroll();
    }
  }, [scrollSpeed]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const apparatuses = aparattus || [];
  
  const duplicatedApparatuses = [...apparatuses, ...apparatuses];

  const handleImageError = (event) => {
    event.target.src = defaultAparat;
  };

  return (
    <section className="flex flex-col md:flex-row items-center p-10 gap-8">
      
      <div className="flex-1 flex flex-col items-start text-left max-w-4xl">
        <p className="text-lg font-semibold text-gray-600 mb-2">Aparat Desa</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Memperkenalkan <span className="text-primary-color">Aparat Desa</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Jelajahi inovasi dalam pengelolaan desa melalui aplikasi web desa yang dirancang khusus untuk memenuhi kebutuhan administratif dan komunikasi desa.
        </p>
      </div>

      
      <div
        className="relative overflow-hidden flex-1"
        onMouseEnter={() => setScrollSpeed(1)}
        onMouseLeave={() => setScrollSpeed(3)}
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-6 whitespace-nowrap"
          style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}
        >
          
          {duplicatedApparatuses.map((apparatus) => (
            <div
              key={apparatus._id}
              className="flex flex-col items-center w-[300px] h-[400px] shadow-lg p-4 bg-white rounded-lg overflow-hidden"
            >
              <div className="w-full h-[300px] flex-shrink-0 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={apparatus.file
                    ? `https://bucket-2.nos.wjv-1.neo.id/${apparatus.file}`
                    : defaultAparat}
                  alt={`Aparat Desa : ${apparatus.name}`}
                  onError={handleImageError} 
                />
              </div>
              <div className="flex flex-col items-center flex-1 justify-center text-center">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{apparatus.name}</h4>
                <p className="text-gray-600">{apparatus.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
