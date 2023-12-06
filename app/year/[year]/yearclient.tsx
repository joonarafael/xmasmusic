"use client";

import AudioPlayer from "@/app/components/audioplayer/audioplayer";
import Container from "@/app/components/container";
import useYears from "@/app/hooks/useYears";

interface YearClientProps {
	year: string;
}

const YearClient: React.FC<YearClientProps> = ({ year }) => {
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
					<AudioPlayer year={thisYear} />
				</div>
			</div>
		</Container>
	);
};

export default YearClient;
