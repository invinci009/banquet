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

    // Security headers
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://maps.googleapis.com",
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "font-src 'self' https://fonts.gstatic.com data:",
                            "img-src 'self' data: blob: https: http:",
                            "connect-src 'self' https://api.web3forms.com https://www.google-analytics.com https://www.googleapis.com https://maps.googleapis.com",
                            "frame-src 'self' https://www.google.com https://maps.google.com",
                            "media-src 'self' blob:",
                            "object-src 'none'",
                            "base-uri 'self'",
                            "form-action 'self' https://api.web3forms.com",
                            "frame-ancestors 'self'",
                            "upgrade-insecure-requests",
                        ].join('; '),
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
