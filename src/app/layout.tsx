import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "800"],
    variable: "--font-inter"
});

export const metadata: Metadata = {
	title: "Game Store",
	description: "The best of the games",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={`${inter.variable}`}>
				{children}
			</body>
		</html>
	);
}
