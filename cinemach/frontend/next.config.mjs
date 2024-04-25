/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api",
        destination: "http://localhost:4444/api",
      },
    ];
  },
};

export default nextConfig;
