/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drive.google.com"], // Allow Google Drive (won’t help with the view link)
  },
};

export default nextConfig;
