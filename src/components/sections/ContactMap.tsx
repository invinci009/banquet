'use client';

import dynamic from 'next/dynamic';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

// Dynamically import the map component to avoid SSR issues with Leaflet
const LeafletMap = dynamic(() => import('./LeafletMap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
            <span className="text-gray-500">Loading map...</span>
        </div>
    ),
});

const ContactMap = () => {
    // Alba Banquet Hall coordinates
    const position: [number, number] = [25.5765, 85.0676];
    const address = "Alba Banquet Hall, Near Pakori Factory, Phulwari Sharif, Patna, Bihar 801505";

    const handleGetDirections = () => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`, '_blank');
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us Here</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Conveniently located in the heart of Patna, Alba Banquet Hall is easily accessible from all major areas.
                    </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    {/* Map Container */}
                    <div className="h-[500px] w-full">
                        <LeafletMap position={position} />
                    </div>

                    {/* Overlay Card */}
                    <div className="absolute bottom-6 left-6 right-6 md:left-6 md:right-auto md:w-96 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-amber-500 p-3 rounded-full">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800 text-lg">Alba Banquet Hall</h3>
                                <p className="text-gray-600 text-sm mt-1">{address}</p>
                            </div>
                        </div>

                        <div className="space-y-2 mb-4">
                            <div className="flex items-center gap-3 text-gray-600">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">Open: 10:00 AM - 10:00 PM</span>
                            </div>
                        </div>

                        <button
                            onClick={handleGetDirections}
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                        >
                            <Navigation className="w-5 h-5" />
                            Get Directions
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMap;
