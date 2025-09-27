/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/shreyaschandolkar',
  assetPrefix: '/shreyaschandolkar/',
}

module.exports = nextConfig
