'use client';

import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';

// Dynamically import the map component to avoid SSR issues with Leaflet
const LeafletMap = dynamic(() => import('./LeafletMap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 animate-pulse flex items-center justify-center">
            <div className="text-amber-600 flex items-center gap-2">
                <MapPin className="w-5 h-5 animate-bounce" />
                <span>Loading map...</span>
            </div>
        </div>
    ),
});

const ContactMap = () => {
    // Alba Banquet Hall coordinates - Alba Colony, Phulwari Sharif, Patna
    const position: [number, number] = [25.56939834016315, 85.07350050830271];

    return (
        <div className="h-full w-full">
            <LeafletMap position={position} />
        </div>
    );
};

export default ContactMap;
