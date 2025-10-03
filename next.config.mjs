/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  // Allow images from external domains
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;