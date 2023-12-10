"use client";

import { useState } from "react";

interface ProgressBarProps {
	currentTime: number;
	totalDuration: number;
	onSeek: (time: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
	currentTime,
	totalDuration,
	onSeek,
}) => {
	const [isSeeking, setIsSeeking] = useState(false);
	const [seekValue, setSeekValue] = useState(
		(currentTime / totalDuration) * 100 || 0
	);

	const formattedTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time - minutes * 60);

		const formattedMinutes = minutes.toString().padStart(2, "0");
		const formattedSeconds = seconds.toString().padStart(2, "0");

		return `${formattedMinutes}:${formattedSeconds}`;
	};

	const handleSeek = (value: number) => {
		const timeToSeek = (value / 100) * totalDuration;
		onSeek(timeToSeek);
	};

	const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		setSeekValue(value);
		handleSeek(value);
	};

	const handleMouseMove = (e: any) => {
		if (isSeeking) {
			handleSliderChange(e as React.ChangeEvent<HTMLInputElement>);
		}
	};

	return (
		<div className="flex flex-col">
			<input
				className="slider bg-red-500"
				max="100"
				min="1"
				step="0.25"
				type="range"
				value={isSeeking ? seekValue : (currentTime / totalDuration) * 100 || 0}
				onChange={handleSliderChange}
				onMouseDown={() => setIsSeeking(true)}
				onMouseUp={() => setIsSeeking(false)}
				onMouseMove={handleMouseMove}
			/>
			<div className="flex w-full flex-row justify-between mt-1">
				<span className="text-xs">{formattedTime(currentTime)}</span>
				<span className="text-xs">{formattedTime(totalDuration)}</span>
			</div>
		</div>
	);
};

export default ProgressBar;
