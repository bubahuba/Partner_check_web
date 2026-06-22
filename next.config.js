/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Ensure all static paths are generated
  generateBuildId: async () => {
    return 'static-build'
  },
}

module.exports = nextConfig

