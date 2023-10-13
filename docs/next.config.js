/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

const nextConfig = {
  experimental: {
    externalDir: process.env.NODE_ENV == 'development' ? true : false
  }
};

module.exports = withNextra(nextConfig);
