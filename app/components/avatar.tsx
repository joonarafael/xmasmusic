"use client";

import Image from "next/image";

interface AvatarProps {
	size?: number | null;
}

const Avatar: React.FC<AvatarProps> = ({ size }) => {
	if (!size) {
		size = 30;
	}

	return (
		<Image
			alt="Avatar"
			className="rounded-full"
			height={size}
			src={"/images/nouser.png"}
			width={size}
		/>
	);
};

export default Avatar;
