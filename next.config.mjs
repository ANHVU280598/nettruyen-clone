/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jumpg-assets.tokyo-cdn.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'mangaplus.shueisha.co.jp',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
