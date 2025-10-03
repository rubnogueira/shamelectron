/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: 'export',
  // Set base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/shamelectron' : undefined,

  // Allow images from external domains
  images: {
    unoptimized: true,
  },
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;