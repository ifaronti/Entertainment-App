/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_API: "http://localhost:4000/api",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        pathname: "**",
        hostname: "d24dz7hlmivck7.cloudfront.net",
      },
      {
        protocol: "https",
        pathname: "**",
        hostname: "iili.io",
      },
    ],
  },
};

export default nextConfig;
