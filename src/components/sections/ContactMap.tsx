"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom gold marker icon
const customIcon = new Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

// Patna coordinates (near Gandhi Maidan)
const position: [number, number] = [25.6093, 85.1376];

export default function ContactMap() {
    return (
        <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="h-full w-full"
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    <div className="text-center p-2">
                        <h3 className="font-bold text-navy-900 mb-1">Royal Grandeur Banquet Hall</h3>
                        <p className="text-sm text-gray-600">123 Exhibition Road, Near Gandhi Maidan</p>
                        <p className="text-sm text-gray-600">Patna, Bihar 800001</p>
                        <a
                            href="https://maps.google.com/?q=25.6093,85.1376"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-sm text-gold-600 hover:text-gold-700 font-medium"
                        >
                            Get Directions →
                        </a>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
}
