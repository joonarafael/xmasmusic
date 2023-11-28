"use client";

import { useEffect, useMemo, useState } from "react";

import Audio from "@/app/components/audioplayer";
import Container from "@/app/components/container";
import useYears from "@/app/hooks/useYears";

interface YearClientProps {
	year: string;
}

const YearClient: React.FC<YearClientProps> = ({ year }) => {
	const [width, setWidth] = useState(window.innerWidth);

	const breakpoint = 960;
	const breakpointHeading = 1040;

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResizeWindow);

		return () => {
			window.removeEventListener("resize", handleResizeWindow);
		};
	}, []);

	const { getAll } = useYears();
	const fullList = getAll();

	const findYear = (searchValue: string) => {
		return fullList.filter(function (entry) {
			return entry.value.toString() === searchValue;
		});
	};

	const thisYear = findYear(year)[0];

	return (
		<Container>
			<div className="max-w-screen-lg mx-auto">
				<div className="justify-center text-center flex flex-col gap-4">
					<span className="text-xl">{year}</span>
					<span className="text-4xl text-bold">
						{thisYear.title.toUpperCase()}
					</span>
					<Audio />
				</div>
			</div>
		</Container>
	);
};

export default YearClient;
