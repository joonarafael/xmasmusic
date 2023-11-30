"use client";

import { useEffect, useRef, useState } from "react";

import Controls from "./controls";
import { createAudioPlayer } from "./playlogic";
import ProgressBar from "./progressbar";

const AudioPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(true);

	const audioElementRef = useRef(createAudioPlayer("2019"));

	return (
		<div className="flex flex-col justify-center">
			<ProgressBar />
			<Controls onPlayPauseClick={audioElementRef.current} />
		</div>
	);
};

export default AudioPlayer;
