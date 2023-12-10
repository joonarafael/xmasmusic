"use client";

import { useEffect, useState } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";

import { CreateAudioPlayer } from "./playlogic";

type ControlsProps = {
	audioElement: ReturnType<typeof CreateAudioPlayer>;
	onFastForward: () => void;
	onRewind: () => void;
};

const Controls: React.FC<ControlsProps> = ({
	audioElement,
	onFastForward,
	onRewind,
}) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const playClick = () => {
		audioElement.togglePlayPause();
		setIsPlaying(audioElement.isPlaying());
	};

	const fastForwardClick = () => {
		onFastForward();
	};

	const rewindClick = () => {
		onRewind();
	};

	useEffect(() => {
		const updateProgress = () => {
			setIsPlaying(audioElement.isPlaying());
		};

		const intervalId = setInterval(updateProgress, 1000);

		return () => clearInterval(intervalId);
	}, [audioElement]);

	return (
		<div className="flex flex-row gap-6 mt-4 p-4 justify-center items-center">
			<button className="flex flex-row gap-2 items-center">
				30
				<FaBackward onClick={rewindClick} size={22} color="#3D0C11" />
			</button>
			<button onClick={playClick}>
				{isPlaying ? (
					<FaPause size={28} color="#3D0C11" />
				) : (
					<FaPlay size={28} color="#3D0C11" />
				)}
			</button>
			<button className="flex flex-row gap-2 items-center">
				<FaForward onClick={fastForwardClick} size={22} color="#3D0C11" />
				30
			</button>
		</div>
	);
};

export default Controls;
