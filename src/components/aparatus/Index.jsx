import React, { useEffect, useRef, useState } from 'react';

import defaultAparat from '../../assets/user.jpeg';

export default function Apparatus({ data }) {
  const scrollContainerRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(3);

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

  const apparatuses = data || [];
  const duplicatedApparatuses = [...apparatuses, ...apparatuses];

  const handleImageError = (event) => {
    event.target.src = defaultAparat;
  };

  return (
    <section className="flex flex-col md:flex-row items-center p-4 md:p-10 gap-4 md:gap-8">
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
          {duplicatedApparatuses.map((apparatus, index) => (
            <div
              key={`${apparatus._id}-${index}`}
              className="flex flex-col items-center w-[250px] md:w-[300px] h-[350px] md:h-[400px] shadow-lg p-4 bg-white rounded-lg overflow-hidden"
            >
              <div className="w-full h-[200px] md:h-[300px] flex-shrink-0 mb-4">
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
                <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{apparatus.name}</h4>
                <p className="text-sm md:text-lg text-gray-600">{apparatus.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-start text-left max-w-4xl">
        <p className="text-lg font-semibold text-gray-600 mb-2">Tim Pelatihan Gajah</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Memperkenalkan <span className="text-primary-color">Tim Pelatihan Gajah</span>
        </h2>
        <p className="text-sm md:text-lg text-gray-700 mb-6">
          Jelajahi inovasi dalam pengelolaan kegiatan pelatihan gajah melalui platform digital yang dirancang untuk memenuhi kebutuhan administratif dan meningkatkan kolaborasi tim kami.
        </p>
      </div>
    </section>
  );
}
