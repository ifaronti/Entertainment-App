/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_API: "https://f0jmhhiva6.execute-api.eu-west-1.amazonaws.com/latest/api",
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
