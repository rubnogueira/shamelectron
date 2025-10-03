/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  // Set base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/shamelectron2' : '',
  // Allow images from external domains
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;