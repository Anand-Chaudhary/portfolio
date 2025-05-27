/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** @type {(config: import('webpack').Configuration) => import('webpack').Configuration} */
  webpack: (config) => {
    config.module.rules.push({
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

module.exports = nextConfig 