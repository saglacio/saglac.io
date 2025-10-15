/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static site generation
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig
