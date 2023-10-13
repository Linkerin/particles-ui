/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

const nextConfig = {
  experimental: { externalDir: true }
};

module.exports = withNextra(nextConfig);
