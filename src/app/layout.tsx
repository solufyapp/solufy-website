import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
	title: "Solufy",
	description: "Desenvolvimento de Software",
	category: "Software Development",
	openGraph: {
		type: "website",
		title: "Solufy",
		url: "https://solufy.app/",
		locale: "pt_BR",
		emails: ["contato@solufy.app"],
		phoneNumbers: ["+55 (34) 99878-5110"],
	},
	metadataBase: new URL("https://solufy.app/"),
};

export const viewport: Viewport = {
	colorScheme: "light",
	themeColor: "#9A35FF",
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
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
