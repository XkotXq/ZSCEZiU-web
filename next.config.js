/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.pixabay.com', 'media.istockphoto.com', 'gorka.rawa-kopernik.pl', 'drive.google.com', "google.com", "istockphoto.com"],
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
