"use client";

export function createAudioPlayer(year: string) {
	const audioElement: HTMLAudioElement = new Audio();
	audioElement.src =
		"https://dl.dropboxusercontent.com/scl/fi/huq5fs8y0vustwnff1ubi/2022_loudness_adjusted.mp3?rlkey=0wb18g6mcpu43ahlb6yprhju0";
	audioElement.load();

	function togglePlayPause() {
		if (audioElement.paused) {
			audioElement.play();
		} else {
			audioElement.pause();
		}
	}

	return togglePlayPause;
}
