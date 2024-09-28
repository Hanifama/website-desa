import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Polygon, Popup, Marker } from 'react-leaflet';

export default function VillageMap({dataProfile, dataMap}) {

  const batasDesa = dataMap?.map(point => [point.latitude, point.longitude]);

  const calculateCentroid = (points) => {
    if (!points || points.length === 0) return [0, 0];
    const totalPoints = points.length;
    let sumLat = 0;
    let sumLng = 0;

    points.forEach(([lat, lng]) => {
      sumLat += lat;
      sumLng += lng;
    });

    return [sumLat / totalPoints, sumLng / totalPoints];
  };

  const centerPosition = calculateCentroid(batasDesa);
  const balaiDesaPosition = [dataProfile.latitude, dataProfile.longitude];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
            Wilayah Desa Kami
          </h2>
          <p className="text-xl font-medium text-gray-700 italic mb-2">
            Jelajahi dua peta interaktif dan lihat detail penting wilayah desa kami di sini.
          </p>          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg z-0">
            <div className="absolute bottom-0 left-0 w-full bg-white z-20 p-2 text-center font-bold text-lg flex items-center justify-center space-x-2">
              <div className="w-4 h-4 bg-blue-500"></div>
              <span>Batas Wilayah Desa</span>
            </div>

            <div className="relative w-full h-full z-10">
              <MapContainer
                center={centerPosition}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; OpenStreetMap contributors'
                />
                {batasDesa && (
                  <Polygon positions={batasDesa} color="blue" weight={2}>
                    <div>
                      <h3 className="font-bold text-lg">Batas wilayah Desa {dataProfile.name}</h3>
                    </div>
                  </Polygon>
                )}
              </MapContainer>
            </div>
          </div>

          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg z-0">
            <div className="absolute bottom-0 left-0 w-full bg-white z-20 p-2 text-center font-bold text-lg flex items-center justify-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span>Letak Balai Desa</span>
            </div>

            <div className="relative w-full h-full z-10">
              <MapContainer
                center={balaiDesaPosition}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; OpenStreetMap contributors'
                />
                <Marker position={balaiDesaPosition}>
                  <Popup>
                    <div>
                      <h3 className="font-bold text-lg">Balai Desa {dataProfile.name}</h3>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}