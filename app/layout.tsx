import "./globals.css";

import { Nunito } from "next/font/google";

import ClientOnly from "./components/clientonly";
import Footer from "./components/footer";
import Navbar from "./components/navbar/navbar";

export const metadata = {
	title: "XMAS MUSIC",
	description: "Christmas Music Catalogue",
};

const font = Nunito({
	subsets: ["latin"],
});

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<ClientOnly>
					<Navbar />
				</ClientOnly>
				<div className="pb-20 pt-28">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
