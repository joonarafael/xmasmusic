"use client";

const ProgressBar = ({ currentTime, totalDuration }) => {
	const formattedTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time - minutes * 60);

		let formattedMinutes;

		if (minutes <= 9) {
			formattedMinutes = `0${minutes}`;
		} else {
			formattedMinutes = `${minutes}`;
		}

		let formattedSeconds;

		if (seconds <= 9) {
			formattedSeconds = `0${seconds}`;
		} else {
			formattedSeconds = `${seconds}`;
		}

		return `${formattedMinutes}:${formattedSeconds}`;
	};

	return (
		<div className="flex flex-col">
			<input
				className="slider"
				max="100"
				min="1"
				step="0.25"
				type="range"
				value={(currentTime / totalDuration) * 100 || 0}
				onChange={() => {}}
			/>
			<div className="flex w-full flex-row justify-between mt-1">
				<span className="text-xs">{formattedTime(currentTime)}</span>
				<span className="text-xs">{formattedTime(totalDuration)}</span>
			</div>
		</div>
	);
};

export default ProgressBar;
