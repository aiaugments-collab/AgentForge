import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  // Allow external domains for images and videos
  images: {
    domains: ['www.activepieces.com', 'activepieces.com'],
  },

  // Configure headers for external video loading
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "media-src 'self' https://www.activepieces.com https://activepieces.com data: blob:;",
          },
        ],
      },
    ];
  },


  // Ensure static file serving
  trailingSlash: false,

  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Configure MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
