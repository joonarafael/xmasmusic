"use client";

const HomePageLink = () => {
	return (
		<div
			onClick={() => {
				window.location.href = "/years/2024";
			}}
			className="relative group"
		>
			<div className="absolute opacity-75 -inset-0.5 bg-gradient-to-r from-emerald-500 to-red-500 rounded-xl blur-xl group-hover:opacity-100 rotate-0 group-hover:rotate-1 group-hover:blur-2xl transition group-hover:duration-200 duration-1000"></div>
			<div className="rounded-xl relative flex flex-row gap-2 p-4 text-center justify-center text-2xl items-center cursor-pointer w-full bg-slate-50 text-indigo-500 group-hover:underline">
				KUUNTELE JOULUN 24 BIISI
			</div>
		</div>
	);
};

export default HomePageLink;
