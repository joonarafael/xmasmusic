"use client";

import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
	const today = new Date();

	return (
		<div
			className="
                flex
                flex-col
                gap-3
                items-center
                justify-center
                max-w-[2520px]
                md:px-10
                mx-auto
                p-4
                pb-12
                sm:px-2
                text-center
                xl:px-20
            "
		>
			<div>XMAS MUSIC</div>
			<div className="flex flex-row items-center align-center gap-2">
				<AiOutlineCopyright size={16} />
				<span className="text-neutral-500">{`2023 - ${today.getFullYear()} Joona Rafael Kettunen`}</span>
			</div>
		</div>
	);
};

export default Footer;
