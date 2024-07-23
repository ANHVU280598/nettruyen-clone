/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jumpg-assets.tokyo-cdn.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
