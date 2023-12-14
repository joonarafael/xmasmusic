"use client";

interface YearClientProps {
	url: string;
}

export function CreateAudioPlayer(url: string) {
	const audioElement: HTMLAudioElement = new Audio();

	audioElement.src = url;
	audioElement.load();

	let currentVolume = 0.8;

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

	function isPlaying() {
		return !audioElement.paused;
	}

	function seekTo(time: number) {
		audioElement.currentTime = time;
	}

	function increaseVolume() {
		if (currentVolume < 1) {
			currentVolume += 0.1;
			audioElement.volume = currentVolume;
		}
	}

	function decreaseVolume() {
		if (currentVolume > 0) {
			currentVolume -= 0.1;
			audioElement.volume = currentVolume;
		}
	}

	function getVolume() {
		return Math.round(currentVolume * 100);
	}

	return {
		togglePlayPause,
		getCurrentTime,
		getTotalDuration,
		addTimeUpdateListener,
		seekTo,
		isPlaying,
		increaseVolume,
		decreaseVolume,
		getVolume,
	};
}
