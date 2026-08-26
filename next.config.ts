/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/Portifolio",

  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ["192.168.0.241"],
};

module.exports = nextConfig;
