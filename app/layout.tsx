import "./globals.css";

import { DM_Sans } from "next/font/google";

import ClientOnly from "./components/clientonly";
import Footer from "./components/footer";
import Navbar from "./components/navbar/navbar";

export const metadata = {
	title: "XMAS MUSIC",
	description: "Christmas Music Catalogue",
};

const font = DM_Sans({
	weight: "400",
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
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-770LHRKN31"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-770LHRKN31');
            `,
					}}
				></script>
			</body>
		</html>
	);
}
