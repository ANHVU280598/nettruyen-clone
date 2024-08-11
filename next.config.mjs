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
                hostname: 'dtcdnyacd.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cmnvymn.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'manhwaclan.com',
                pathname: '/**',
            },
        ],
    },
};


export default nextConfig;
