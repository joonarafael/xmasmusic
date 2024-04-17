"use client";

import Container from "../components/container";
import { years } from "../utils/yearinfo";

const YearsClient = () => {
	return (
		<Container>
			<div className="max-w-screen-lg mx-auto">
				<div className="justify-center text-center text-neutral-900 flex flex-col gap-8">
					<p className="text-xl">XMAS MUSIC</p>
					<h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-400 inline-block text-transparent bg-clip-text">
						BIISIT
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 py-8">
						{years.map((year) => (
							<div
								key={year.value}
								className="relative group cursor-pointer"
								onClick={() => (window.location.href = `/years/${year.value}`)}
							>
								<div className="absolute rotate-0 group-hover:rotate-6 opacity-15 inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur-lg group-hover:opacity-50 group-hover:blur-xl transition group-hover:duration-200 duration-1000"></div>
								<div className="relative bg-slate-50 min-h-48 min-w-48 rounded-xl drop-shadow-lg p-4 flex flex-col gap-4 group">
									<h2 className="text-xl font-bold transition group-hover:duration-200 duration-1000 group-hover:text-green-500">
										{year.value}
									</h2>
									<p className="text-lg transition group-hover:duration-200 duration-1000 group-hover:text-red-800">
										{year.title.toUpperCase()}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Container>
	);
};

export default YearsClient;
