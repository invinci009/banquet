"use client";

import { useEffect, useState } from "react";

export default function ContactMap() {
    const [MapComponent, setMapComponent] = useState<React.ComponentType | null>(null);

    useEffect(() => {
        // Dynamically import leaflet only on client side
        const loadMap = async () => {
            const L = await import("leaflet");
            const { MapContainer, TileLayer, Marker, Popup } = await import("react-leaflet");

            // Fix for default marker icon
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
                iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
                shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
            });

            // Import CSS
            await import("leaflet/dist/leaflet.css");

            // Patna coordinates (near Gandhi Maidan)
            const position: [number, number] = [25.6093, 85.1376];

            // Create the map component
            const Map = () => (
                <MapContainer
                    center={position}
                    zoom={15}
                    scrollWheelZoom={false}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            <div className="text-center p-2">
                                <h3 className="font-bold text-gray-900 mb-1">Royal Grandeur Banquet Hall</h3>
                                <p className="text-sm text-gray-600">123 Exhibition Road, Near Gandhi Maidan</p>
                                <p className="text-sm text-gray-600">Patna, Bihar 800001</p>
                                <a
                                    href="https://maps.google.com/?q=25.6093,85.1376"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 text-sm text-amber-600 hover:text-amber-700 font-medium"
                                >
                                    Get Directions →
                                </a>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            );

            setMapComponent(() => Map);
        };

        loadMap();
    }, []);

    if (!MapComponent) {
        return (
            <div className="h-full w-full bg-navy-800/50 flex items-center justify-center">
                <div className="text-gold-400 animate-pulse">Loading Map...</div>
            </div>
        );
    }

    return <MapComponent />;
}
