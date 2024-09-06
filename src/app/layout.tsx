import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
	title: "Solufy",
	description: "Software Development",
};

const inter = Inter({
	subsets: ["latin"],
	style: ["normal", "italic"],
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
