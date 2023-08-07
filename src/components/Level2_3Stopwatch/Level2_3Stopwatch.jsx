import React, { useEffect, useState } from 'react';

function Level2_3Stopwatch() {
	const stopWatchDefaultDisplay = '00:00:00';

	const [stopWatchActivated, setStopWatchActivated] = useState(false);
	const [stopWatchRunning, setStopWatchRunning] = useState(false);
	const [stopWatchTime, setStopWatchTime] = useState(stopWatchDefaultDisplay);
	const [time, setTime] = useState(0);
	const [intervalId, setIntervalId] = useState(null);

	const stopWatchStartHandler = () => {
		setStopWatchActivated(true);
		setStopWatchRunning(true);
		setIntervalId(setInterval(stopWatch, 10));
	};

	const stopWatchStopHandler = () => {
		setStopWatchRunning(false);
		clearInterval(intervalId);
	};

	const stopWatchReset = () => {
		setStopWatchActivated(false);
		setStopWatchRunning(false);
		setTime(0);
		clearInterval(intervalId);
	};

	const stopWatch = () => {
		setTime((prevTime) => prevTime + 1);
	};

	const milliseconds = (time % 100).toString().padStart(2, '0');
	const seconds = Math.floor((time / 100) % 60)
		.toString()
		.padStart(2, '0');
	const minutes = Math.floor((time / 6000) % 60)
		.toString()
		.padStart(2, '0');

	useEffect(() => {
		setStopWatchTime(`${minutes}:${seconds}:${milliseconds}`);
	}, [time]);

	return (
		<article>
			<p>{stopWatchTime}</p>
			{stopWatchRunning ? (
				<button onClick={stopWatchStopHandler}>Stop</button>
			) : (
				<button onClick={stopWatchStartHandler}>Start</button>
			)}
			{stopWatchActivated && <button onClick={stopWatchReset}>Reset</button>}
		</article>
	);
}

export default Level2_3Stopwatch;
