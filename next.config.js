/** @type {import('next').NextConfig} */

const path = require('path')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import 'src/styles/base/variables.scss';`,
  },
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin)
    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'akamai',
    path: '',
    domains: [process.env.NEXT_PUBLIC_WEB_URL],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
