import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-roboto"
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
			<body className={`${roboto.variable} font-roboto`}>
				{children}
			</body>
		</html>
	);
}
