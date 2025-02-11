/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	eslint: { ignoreDuringBuilds: true },
	devIndicators: { appIsrStatus: false },
	poweredByHeader: false,
};

export default nextConfig;
