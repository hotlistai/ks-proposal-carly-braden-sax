/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/hotlistai/**",
      },
      {
        protocol: "https",
        hostname: "www.knoxsignature.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "blog.hotlistdigital.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
}

export default nextConfig
