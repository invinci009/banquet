"use client";

export default function ContactMap() {
    // Alba Banquet Hall, Phulwari Sharif exact coordinates
    const lat = 25.5693995;
    const lng = 85.0734818;

    // Street-level zoom bounding box
    const bbox = `${lng - 0.005},${lat - 0.004},${lng + 0.005},${lat + 0.004}`;

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
