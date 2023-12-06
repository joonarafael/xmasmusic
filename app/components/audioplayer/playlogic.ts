"use client";

interface YearClientProps {
	url: string;
}

export function CreateAudioPlayer(url: string) {
	const audioElement: HTMLAudioElement = new Audio();

	audioElement.src = url;
	audioElement.load();

	function togglePlayPause() {
		if (audioElement.paused) {
			audioElement.play();
		} else {
			audioElement.pause();
		}
	}

	function getCurrentTime() {
		return audioElement.currentTime;
	}

	function getTotalDuration() {
		return audioElement.duration;
	}

	function addTimeUpdateListener(callback: () => void) {
		audioElement.addEventListener("timeupdate", callback);
	}

	return {
		togglePlayPause,
		getCurrentTime,
		getTotalDuration,
		addTimeUpdateListener,
	};
}
