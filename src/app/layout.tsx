import "./globals.css";

import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

export const metadata: Metadata = {
	title: "Solufy",
	description: "Software Development",
};

const inter = Inter({
	subsets: ["latin"],
	style: ["normal", "italic"],
	display: "swap",
});

const manrope = Manrope({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	display: "swap",
	variable: "--font-manrope",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" className="scroll-smooth">
			<body className={`${inter.className} antialiased ${manrope.variable}`}>
				{children}
			</body>
		</html>
	);
}
