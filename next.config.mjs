/** @type {{eslint: {ignoreDuringBuilds: boolean}, images: {remotePatterns: [{protocol: string, hostname: string},{protocol: string, hostname: string},{protocol: string, hostname: string},{protocol: string, hostname: string}]}, experimental: {serverComponentsExternalPackages: string[], serverActions: boolean}}} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
            },
            {
                protocol: "https",
                hostname: "images.clerk.dev",
            },
            {
                protocol: "https",
                hostname: "uploadthing.com",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
            },
        ],
    },
};

export default nextConfig;