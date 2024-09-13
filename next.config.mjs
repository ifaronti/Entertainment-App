/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_API:'http://localhost:4000/api'
    },
    images: {
        domains: ['d24dz7hlmivck7.cloudfront.net'],
      },
};

export default nextConfig;
