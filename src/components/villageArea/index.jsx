import React from 'react';
import { MapContainer, TileLayer, Polygon, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useVillageProfile } from '../../hooks/useAPI';

export default function VillageMap() {
  const { profile, boundaryData, loading, error } = useVillageProfile();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const batasDesa = boundaryData?.map(point => [point.latitude, point.longitude]);
  const balaiDesaPosition = [profile.latitude, profile.longitude];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Wilayah Desa Kami</h2>
          <p className="text-lg text-gray-600">
            Jelajahi dua peta interaktif dan lihat detail penting wilayah desa kami di sini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Map 1: Batas Desa */}
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg z-0">
            {/* Title for Map 1 */}
            <div className="absolute top-0 left-0 w-full bg-white bg-opacity-80 z-20 p-2 text-center font-bold text-lg">
              Batas Desa
            </div>
            <MapContainer
              center={[-5.141382526782058, 105.66216174956756]}
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

          {/* Map 2: Letak Balai Desa */}
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg z-0">
            {/* Title for Map 2 */}
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 z-10 p-2 text-center font-bold text-lg">
              Letak Balai Desa
            </div>
            <MapContainer
              center={[-5.141382526782058, 105.66216174956756]}
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
