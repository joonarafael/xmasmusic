"use client";

import { FaLink } from "react-icons/fa";

interface Credits19Props {
	url: string;
}

const Credits19: React.FC<Credits19Props> = ({ url }) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="text-left p-4 border border-[#FE6244] rounded shadow-lg">
				<span className="text-bold text-lg">TIEDOT</span>
				<div className="flex flex-row gap-4">
					<div className="w-1/2 flex flex-col gap-1">
						<span className="mt-3 text-neutral-700">Sävellys & sanat</span>
						<span className="text-neutral-500">
							Jukka Takalo, Kai Latvalehto
						</span>
						<span className="mt-3 text-neutral-700">Sovitus</span>
						<span className="text-neutral-500">Juha Kettunen</span>
					</div>
					<div className="w-1/2 flex flex-col gap-1">
						<span className="mt-3 text-neutral-700">Laulu</span>
						<span className="text-neutral-500">Nooa Kettunen</span>
						<span className="mt-3 text-neutral-700">Taustalaulu</span>
						<span className="text-neutral-500">
							Joona Kettunen & Juha Kettunen
						</span>
						<span className="mt-3 text-neutral-700">Piano & koskettimet</span>
						<span className="text-neutral-500">Joona Kettunen</span>
						<span className="mt-3 text-neutral-700">
							Kitara, basso & rummut
						</span>
						<span className="text-neutral-500">Juha Kettunen</span>
						<span className="mt-3 text-neutral-700">Miksaus & masterointi</span>
						<span className="text-neutral-500">Juha Kettunen</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-2 text-left p-4 border border-[#FC2947] rounded shadow-lg">
				<span className="text-bold text-lg">EIKÖ SOITIN TOIMI?</span>
				<div
					onClick={() => window.open(`${url}`, "_blank")}
					className="group flex flex-row gap-2 items-center cursor-pointer"
				>
					<FaLink />
					<span className="text-indigo-500 group-hover:underline">
						Avaa kappaleen alkuperäinen tiedosto Dropboxissa
					</span>
				</div>
			</div>
		</div>
	);
};

export default Credits19;
