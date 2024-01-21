import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import {ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
	title: "Threads Auth",
	description: "A next.js 14 Meta Threads App",
};

function Header() {
	return (
		<header style={{display: "flex", justifyContent: "space-between", padding: 20}}>
			<SignedIn>
				<UserButton/>
			</SignedIn>
			<SignedOut>
				<SignInButton/>
			</SignedOut>
		</header>
	);
}

export default function RootLayout(
	{children}: Readonly<ILayoutProps>
) {
	return (
		<ClerkProvider>
			<html lang="en">
			<body className={`${inter.className} bg-dark-1`}>
			<Header/>
			{children}
			</body>
			</html>
		</ClerkProvider>
	)
}
