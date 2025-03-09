/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages 需要的配置
  output: 'standalone',
  images: {
    unoptimized: true,
    // 如果使用了 next/image，需要配置允许的域名
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  }
}

module.exports = nextConfig 