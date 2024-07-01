import withVideos from 'next-videos';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

};

export default withVideos(nextConfig);
