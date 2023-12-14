"use client";

import { useEffect, useState } from "react";
import {
	CiSquareMinus,
	CiSquarePlus,
	CiVolumeHigh,
	CiVolumeMute,
} from "react-icons/ci";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";

import { CreateAudioPlayer } from "./playlogic";

type ControlsProps = {
	audioElement: ReturnType<typeof CreateAudioPlayer>;
	onFastForward: () => void;
	onRewind: () => void;
	onVolumeUp: () => void;
	onVolumeDown: () => void;
	onVolumeChange: () => number;
};

const Controls: React.FC<ControlsProps> = ({
	audioElement,
	onFastForward,
	onRewind,
	onVolumeUp,
	onVolumeDown,
	onVolumeChange,
}) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(80);

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

	const volumeUpClick = () => {
		onVolumeUp();
		setVolume(onVolumeChange);
	};

	const volumeDownClick = () => {
		onVolumeDown();
		setVolume(onVolumeChange);
	};

	useEffect(() => {
		const updateProgress = () => {
			setIsPlaying(audioElement.isPlaying());
		};

		const intervalId = setInterval(updateProgress, 1000);

		return () => clearInterval(intervalId);
	}, [audioElement]);

	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-row gap-6 p-4 justify-center items-center">
				<button className="flex flex-row gap-2 items-center">
					30
					<FaBackward onClick={rewindClick} size={22} color="#0d0d0d" />
				</button>
				<button onClick={playClick}>
					{isPlaying ? (
						<FaPause size={28} color="#0d0d0d" />
					) : (
						<FaPlay size={28} color="#0d0d0d" />
					)}
				</button>
				<button className="flex flex-row gap-2 items-center">
					<FaForward onClick={fastForwardClick} size={22} color="#0d0d0d" />
					30
				</button>
			</div>
			<div className="flex flex-row gap-4 p-4 justify-center items-center">
				{volume < 1 ? (
					<CiSquareMinus size={28} color="#e6e6e6" />
				) : (
					<button onClick={volumeDownClick}>
						<CiSquareMinus size={28} color="#0d0d0d" />
					</button>
				)}
				<div className="flex flex-row gap-2 justify-center items-center w-[7vh]">
					{volume < 1 ? (
						<CiVolumeMute size={28} color="#0d0d0d" />
					) : (
						<CiVolumeHigh size={28} color="#0d0d0d" />
					)}
					<span>{`${volume} %`}</span>
				</div>
				{volume > 99 ? (
					<CiSquarePlus size={28} color="#e6e6e6" />
				) : (
					<button onClick={volumeUpClick}>
						<CiSquarePlus size={28} color="#0d0d0d" />
					</button>
				)}
			</div>
		</div>
	);
};

export default Controls;
