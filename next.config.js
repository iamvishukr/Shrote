/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  productionBrowserSourceMaps: false,
  compress: true,
  reactStrictMode: true,
  turbopack: {},

  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
      ],
    },
  ],

  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      const { IgnorePlugin } = require('webpack');
      const TerserPlugin = require('terser-webpack-plugin');
      const JavaScriptObfuscator = require('webpack-obfuscator');

      config.plugins.push(
        new JavaScriptObfuscator({
          rotateStringArray: true,
          stringArray: true,
          stringArrayThreshold: 0.75,
          compact: true,
          disableConsoleOutput: true,
          identifierNamesGenerator: 'hexadecimal',
        })
      );

      config.plugins.push(
        new IgnorePlugin({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/,
        })
      );

      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: { drop_console: true },
            format: { comments: false },
          },
          extractComments: false,
        }),
      ];
    }
    return config;
  },
};

module.exports = nextConfig;