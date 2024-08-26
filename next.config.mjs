/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.headlesshost.com", "localhost"],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;",
          },
          {
            key: "x-vercel-protection-bypass",
            value: "qmWa32MAkgYFKRcHAhGrCYvsZIXC3Gsg",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
