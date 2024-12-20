import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Disables type checking during the build process
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
