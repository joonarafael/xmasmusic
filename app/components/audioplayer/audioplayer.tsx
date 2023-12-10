"use client";

import { useEffect, useRef, useState } from "react";

import Controls from "./controls";
import { CreateAudioPlayer } from "./playlogic";
import ProgressBar from "./progressbar";

interface AudioPlayerProps {
	year: any;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ year }) => {
	const [currentTime, setCurrentTime] = useState(0);
	const [totalDuration, setTotalDuration] = useState(0);

	const audioElement = useRef(CreateAudioPlayer(year.songUrl));

	const handleFastForward = () => {
		const newTime = currentTime + 30;
		audioElement.current.seekTo(
			newTime > totalDuration ? totalDuration : newTime
		);
	};

	const handleRewind = () => {
		const newTime = currentTime - 30;
		audioElement.current.seekTo(newTime < 0 ? 0 : newTime);
	};

	const handleSeek = (time: number) => {
		audioElement.current.seekTo(time);
	};

	useEffect(() => {
		const updateProgress = () => {
			setCurrentTime((prevTime) => audioElement.current.getCurrentTime());
			setTotalDuration((prevDuration) =>
				audioElement.current.getTotalDuration()
			);
		};

		const intervalId = setInterval(updateProgress, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="flex flex-col justify-center">
			<ProgressBar
				currentTime={currentTime}
				totalDuration={totalDuration}
				onSeek={handleSeek}
			/>
			<Controls
				audioElement={audioElement.current}
				onFastForward={handleFastForward}
				onRewind={handleRewind}
			/>
		</div>
	);
};

export default AudioPlayer;
