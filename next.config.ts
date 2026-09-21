import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the root: a stray ~/package-lock.json otherwise makes Turbopack pick $HOME.
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;
