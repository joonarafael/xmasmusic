"use client";

import { useEffect, useState } from "react";

import AudioPlayer from "@/app/components/audioplayer/audioplayer";
import Container from "@/app/components/container";
import Credits19 from "@/app/components/credits/credits19";
import Credits20 from "@/app/components/credits/credits20";
import Credits21 from "@/app/components/credits/credits21";
import Credits22 from "@/app/components/credits/credits22";
import Credits23 from "@/app/components/credits/credits23";
import ErrorNote from "@/app/components/errornote";
import Lyrics19 from "@/app/components/lyrics/lyrics19";
import Lyrics20 from "@/app/components/lyrics/lyrics20";
import Lyrics21 from "@/app/components/lyrics/lyrics21";
import Lyrics22 from "@/app/components/lyrics/lyrics22";
import Lyrics23 from "@/app/components/lyrics/lyrics23";
import useYears from "@/app/hooks/useYears";

interface YearClientProps {
	year: string;
}

const YearClient: React.FC<YearClientProps> = ({ year }) => {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 840;

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

	const lyricsObject = () => {
		if (year === "2019") {
			return <Lyrics19 />;
		} else if (year === "2020") {
			return <Lyrics20 />;
		} else if (year === "2021") {
			return <Lyrics21 />;
		} else if (year === "2022") {
			return <Lyrics22 />;
		} else if (year === "2023") {
			return <Lyrics23 />;
		}
	};

	const creditsObject = (songUrl: string) => {
		if (year === "2019") {
			return <Credits19 url={songUrl} />;
		} else if (year === "2020") {
			return <Credits20 url={songUrl} />;
		} else if (year === "2021") {
			return <Credits21 url={songUrl} />;
		} else if (year === "2022") {
			return <Credits22 url={songUrl} />;
		} else if (year === "2023") {
			return <Credits23 url={songUrl} />;
		}
	};

	return (
		<Container>
			<div className="mb-6">
				<ErrorNote />
			</div>
			<div className="max-w-screen-lg mx-auto">
				<div className="justify-center text-center flex flex-col gap-4">
					<span className="text-xl">{year}</span>
					<span className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-green-600 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text">
						{thisYear.title.toUpperCase()}
					</span>
					{thisYear.value !== 2023 && <AudioPlayer year={thisYear} />}
					<hr className="mt-4" />
					{width > breakpoint ? (
						<div className="flex flex-row gap-4 mt-4">
							<div className="w-2/5">{lyricsObject()}</div>
							<div className="w-3/5">{creditsObject(thisYear.songUrl)}</div>
						</div>
					) : (
						<div className="flex flex-col gap-4 mt-4">
							<div>{lyricsObject()}</div>
							<div>{creditsObject(thisYear.songUrl)}</div>
						</div>
					)}
				</div>
			</div>
		</Container>
	);
};

export default YearClient;
