"use client";

import { useEffect, useMemo, useState } from "react";

import Container from "@/app/components/container";

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

	return (
		<Container>
			<div className="max-w-screen-lg mx-auto">{year}</div>
		</Container>
	);
};

export default YearClient;
