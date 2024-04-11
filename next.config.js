/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'gorka.rawa-kopernik.pl',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'istockphoto.com',
                port: '',
                pathname: '/**'
            },
        ]
    },
}
module.exports = {
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS, PUT, DELETE' },
                    { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
                ],
            },
        ];
    },
};
module.exports = nextConfig
