"use client";

import { useState } from 'react';
import { FaBackward, FaForward, FaPause, FaPlay } from 'react-icons/fa';

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
		<div className="flex flex-row gap-4 mt-4 p-4 justify-center">
			<button>
				<FaBackward size={22} color="#3D0C11" />
			</button>
			<button onClick={playClick}>
				{isPlaying ? (
					<FaPause size={28} color="#3D0C11" />
				) : (
					<FaPlay size={28} color="#3D0C11" />
				)}
			</button>
			<button>
				<FaForward size={22} color="#3D0C11" />
			</button>
		</div>
	);
};

export default Controls;
