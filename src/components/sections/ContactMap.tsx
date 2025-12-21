"use client";

export default function ContactMap() {
    // Patna coordinates (near Gandhi Maidan)
    const lat = 25.6093;
    const lng = 85.1376;

    // Wider bounding box to show all of Patna
    const bbox = `${lng - 0.15},${lat - 0.1},${lng + 0.15},${lat + 0.1}`;

    return (
        <div className="h-full w-full relative">
            <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay with venue info */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-4 sm:right-auto bg-white rounded-xl p-4 shadow-xl max-w-xs border border-gray-100">
                <h3 className="font-bold text-gray-900 text-sm mb-1">Royal Grandeur Banquet Hall</h3>
                <p className="text-xs text-gray-500 mb-2">Near Gandhi Maidan, Patna, Bihar</p>
                <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-gold-600 hover:text-gold-700 font-medium"
                >
                    Get Directions →
                </a>
            </div>
        </div>
    );
}
