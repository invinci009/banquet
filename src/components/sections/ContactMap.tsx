"use client";

export default function ContactMap() {
    // Alba Banquet Hall / Alba Catering Services, Phulwari Sharif, Patna
    // Using Google Maps embed for reliable map display

    return (
        <div className="h-full w-full relative bg-gray-100">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4792686396913!2d85.07094017538461!3d25.569399515089037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57e3c4f7f67f%3A0x8b8f8f8f8f8f8f8f!2sAlba%20Catering%20Services!5e0!3m2!1sen!2sin!4v1705669100000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alba Banquet Hall Location - Phulwari Sharif, Patna"
                className="absolute inset-0"
            />
        </div>
    );
}
