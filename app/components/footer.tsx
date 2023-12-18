"use client";

import {
	AiOutlineCopyright,
	AiOutlineDropbox,
	AiOutlineInfoCircle,
} from "react-icons/ai";

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
			<div
				className="hover:underline cursor-pointer"
				onClick={() => {
					window.location.href = "/";
				}}
			>
				XMAS MUSIC
			</div>
			<a
				href="https://www.dropbox.com/scl/fo/4yicw3yv196vlbvyf43hy/h?rlkey=tnre6ajdl4ydrd3jmozymwdly"
				target="_blank"
				className="flex flex-row group cursor-pointer items-center gap-2"
			>
				<span className="group-hover:underline">Biisit Dropboxissa</span>
				<AiOutlineDropbox size={16} />
			</a>
			<div className="flex flex-row items-center gap-2 text-neutral-500">
				Sivuston käytöstä kerätään anonyymia dataa käyttökokemuksen
				parantamiseksi.
			</div>
			<div className="flex flex-row items-center gap-2">
				<AiOutlineCopyright size={16} />
				{today.getFullYear() === 2023 ? (
					<span className="text-neutral-500">{`2023 Joona Kettunen`}</span>
				) : (
					<span className="text-neutral-500">{`2023 - ${today.getFullYear()} Joona Kettunen`}</span>
				)}
			</div>
		</div>
	);
};

export default Footer;
