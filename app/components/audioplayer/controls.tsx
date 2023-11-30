"use client";

import { useState } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";

type ControlsProps = {
	onPlayPauseClick: () => void;
};

const Controls: React.FC<ControlsProps> = ({ onPlayPauseClick }) => {
	const [isPlaying, setIsPlaying] = useState(false);

	const playClick = () => {
		onPlayPauseClick();
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="flex flex-row gap-4 mt-4 justify-center">
			<button>
				<FaBackward />
			</button>
			<button onClick={playClick}>
				{isPlaying ? <FaPause /> : <FaPlay />}
			</button>
			<button>
				<FaForward />
			</button>
		</div>
	);
};

export default Controls;
