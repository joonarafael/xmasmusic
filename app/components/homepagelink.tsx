"use client";

const HomePageLink = () => {
	return (
		<div
			onClick={() => {
				window.location.href = "/year/2023";
			}}
			className="flex flex-col gap-2 p-4 border border-[#FC2947] rounded shadow-lg text-center w-full"
		>
			<div className="group flex flex-row gap-2 items-center cursor-pointer w-full">
				<span className="text-2xl text-indigo-500 group-hover:underline w-full">
					KUUNTELE JOULUN 23 BIISI
				</span>
			</div>
		</div>
	);
};

export default HomePageLink;
