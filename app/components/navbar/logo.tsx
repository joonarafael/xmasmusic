"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
	const router = useRouter();

	return (
		<Image
			alt="Logo"
			className="cursor-pointer"
			height="50"
			onClick={() => router.push("/")}
			src="/images/logo.png"
			width="50"
		/>
	);
};

export default Logo;
