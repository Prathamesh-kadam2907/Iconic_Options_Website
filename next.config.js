/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true, // Add this line
    },
    images: {
  domains: ['images.unsplash.com'],
}

};
module.exports = nextConfig;