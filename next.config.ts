import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "gvf.co.in" },
      { protocol: "https", hostname: "analyticsdepot.com" },
    ],
  },
};

export default nextConfig;
