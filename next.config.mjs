import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  output: 'export',

  basePath: '/Vortex-Documentation',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default withMDX(config);