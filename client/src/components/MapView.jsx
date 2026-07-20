import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Rameswaram coordinates
const RAMESWARAM_CENTER = [9.2876, 79.3129];

export default function MapView() {
  return (
    <MapContainer
      center={RAMESWARAM_CENTER}
      zoom={12}
      className="w-full h-[70vh] rounded-lg"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}