"use client";

import Image from "next/image";

interface MenuLogoProps {
	size?: number | null;
}

const MenuLogo: React.FC<MenuLogoProps> = ({ size }) => {
	if (!size) {
		size = 30;
	}

	return (
		<Image
			alt="MenuLogo"
			className="rounded-full"
			height={size}
			src={"/images/xmas.png"}
			width={size}
		/>
	);
};

export default MenuLogo;
