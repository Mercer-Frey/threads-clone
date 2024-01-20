import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Threads",
	description: "A next.js 14 Meta Threads App",
};

export default function RootLayout(
	{children}: Readonly<ILayoutProps>
) {
	return (
		<ClerkProvider>
			<html lang="en">
			<body className={inter.className}>
			
			{children}
			
			</body>
			</html>
		</ClerkProvider>
	);
}
