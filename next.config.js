/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/files',
            publicPath: '/static/files',
          },
        },
      ],
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