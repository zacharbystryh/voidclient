import type { NextConfig } from "next";

// STATIC_EXPORT=1 → статический экспорт в out/ (для хостингов без Node.js)
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = isStatic
  ? {
      output: "export",
      images: { unoptimized: true },
      typescript: { ignoreBuildErrors: true },
      reactStrictMode: false,
    }
  : {
      output: "standalone",
      typescript: { ignoreBuildErrors: true },
      reactStrictMode: false,
    };

export default nextConfig;
