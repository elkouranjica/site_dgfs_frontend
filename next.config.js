/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains : ["localhost"],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
}

module.exports = nextConfig
