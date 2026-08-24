/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["192.168.0.241"]
};

module.exports = nextConfig;
