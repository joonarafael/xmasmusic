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
			<div
				onClick={() =>
					window.open(
						`https://www.dropbox.com/scl/fo/4yicw3yv196vlbvyf43hy/h?rlkey=tnre6ajdl4ydrd3jmozymwdly`,
						"_blank"
					)
				}
				className="flex flex-row group cursor-pointer items-center align-center gap-2"
			>
				<AiOutlineDropbox size={16} />
				<span className="group-hover:underline">Biisit Dropboxissa</span>
			</div>
			<div className="flex flex-row items-center align-center gap-2">
				<AiOutlineInfoCircle size={16} />
				<span className="text-neutral-500">
					Sivuston käytöstä kerätään anonyymia dataa paremman käyttökokemuksen
					luomiseksi.
				</span>
			</div>
			<div
				className="text-neutral-500 hover:underline cursor-pointer"
				onClick={() => {
					window.open("mailto:joona.kettunen21@gmail.com");
				}}
			>
				joona.kettunen21@gmail.com
			</div>
			<div className="flex flex-row items-center align-center gap-2">
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
