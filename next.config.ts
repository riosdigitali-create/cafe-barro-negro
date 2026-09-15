import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/cafe-barro-negro",
  assetPrefix: "/cafe-barro-negro/",
  images: { unoptimized: true },
};

export default nextConfig;
