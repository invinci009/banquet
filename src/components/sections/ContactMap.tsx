"use client";

export default function ContactMap() {
    // Patna coordinates (near Gandhi Maidan)
    const lat = 25.6093;
    const lng = 85.1376;

    return (
        <div className="h-full w-full relative">
            <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.01}%2C${lat - 0.01}%2C${lng + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat}%2C${lng}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] contrast-[1.1]"
            />

            {/* Overlay with venue info */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-4 sm:right-auto bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-xs">
                <h3 className="font-bold text-gray-900 mb-1">Royal Grandeur Banquet Hall</h3>
                <p className="text-sm text-gray-600 mb-2">123 Exhibition Road, Near Gandhi Maidan, Patna</p>
                <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 font-medium"
                >
                    Get Directions →
                </a>
            </div>
        </div>
    );
}
