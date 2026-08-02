import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.charl.io' }],
        destination: 'https://charl.io/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
