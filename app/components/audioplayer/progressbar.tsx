"use client";

const ProgressBar = () => {
	return (
		<div className="flex flex-col">
			<input
				className="slider"
				max="100"
				min="1"
				step="0.25"
				type="range"
				value={50}
				onChange={() => {}}
			/>
			<div className="flex w-full flex-row justify-between mt-1">
				<span className="text-xs">00:00</span>
				<span className="text-xs">00:00</span>
			</div>
		</div>
	);
};

export default ProgressBar;
