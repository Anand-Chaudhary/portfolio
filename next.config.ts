import type { NextConfig } from 'next'
import type { Configuration as WebpackConfig } from 'webpack'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config: WebpackConfig) => {
    config.module?.rules?.push({
      test: /\.pdf$/,
      type: 'asset/resource',
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.pdf': ['asset/resource']
      }
    }
  }
}

export default nextConfig 