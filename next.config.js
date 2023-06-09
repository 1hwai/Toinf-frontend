/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/calculus",
        destination: "http://localhost:8000/asdf",
      },
    ];
  },
}

module.exports = nextConfig
