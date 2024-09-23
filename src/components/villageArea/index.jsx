import React from 'react';
import { MapContainer, TileLayer, Polygon, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useVillageProfile } from '../../hooks/useAPI';

export default function VillageMap() {
  const { profile, boundaryData, loading, error } = useVillageProfile();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const batasDesa = boundaryData?.map(point => [point.latitude, point.longitude]);

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
  const balaiDesaPosition = [profile.latitude, profile.longitude];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            Wilayah Desa Kami
          </h2>
          <p className="text-xl font-medium text-gray-700 italic mb-2">
            Jelajahi dua peta interaktif dan lihat detail penting wilayah desa kami di sini.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-2"></div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg z-0">
            <div className="absolute top-0 left-0 w-full bg-white bg-opacity-80 z-20 p-2 text-center font-bold text-lg">
              Batas Desa
            </div>
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
                  <Popup>Batas wilayah desa</Popup>
                </Polygon>
              )}
            </MapContainer>
          </div>

          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg z-0">
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 z-10 p-2 text-center font-bold text-lg">
              Letak Balai Desa
            </div>
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
                <Popup>Balai Desa Labuhan Ratu VII</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
