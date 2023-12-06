"use client";

import { useEffect, useRef, useState } from 'react';

import Controls from './controls';
import { CreateAudioPlayer } from './playlogic';
import ProgressBar from './progressbar';

const AudioPlayer = ({ year }) => {
	const [ticking, setTicking] = useState(true);
	const [currentTime, setCurrentTime] = useState(0);
	const [totalDuration, setTotalDuration] = useState(0);

	const audioElement = useRef(CreateAudioPlayer(year.songUrl));

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
			<ProgressBar currentTime={currentTime} totalDuration={totalDuration} />
			<Controls onPlayPauseClick={audioElement.current.togglePlayPause} />
		</div>
	);
};

export default AudioPlayer;
