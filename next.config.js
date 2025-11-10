/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images:{
       remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: 'www.creativeitinstitute.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'bdcalling-academy.netlify.app',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
      },
    ]
  }
};

export default nextConfig;