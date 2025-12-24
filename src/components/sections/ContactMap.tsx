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
        </div>
    );
}
