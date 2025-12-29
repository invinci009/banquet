/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 31536000,
        remotePatterns: [
            { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'images-pw.pixieset.com' },
            { protocol: 'https', hostname: 'lookaside.instagram.com' },
            { protocol: 'https', hostname: 'www.marriagecolours.com' },
            { protocol: 'https', hostname: 'weddingsutra.com' },
            { protocol: 'https', hostname: 'content.jdmagicbox.com' },
            { protocol: 'https', hostname: 'vdiexports.com' },
            { protocol: 'https', hostname: 'divinecaterers.in' },
            { protocol: 'https', hostname: 'lookaside.fbsbx.com' },
            { protocol: 'https', hostname: 'img.weddingbazaar.com' },
            { protocol: 'https', hostname: 'media.weddingz.in' },
            { protocol: 'https', hostname: 'images.pexels.com' },
        ],
    },
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
};

export default nextConfig;
