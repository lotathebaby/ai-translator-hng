/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export required for GitHub Pages
    images: {
      unoptimized: true, // Fixes issues with Next.js image optimization on GitHub Pages
    },
    basePath: "/ai-translator-hng", // 🔹 Replace with your GitHub repository name
    assetPrefix: "/ai-translator-hng/", // 🔹 Replace with your GitHub repository name
  };
  
  export default nextConfig;
  