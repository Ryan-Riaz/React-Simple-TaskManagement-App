import React, { useState, useEffect } from "react";

const Clock = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const timerJob = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
		return () => {
			clearInterval(timerJob);
		};
	}, []);

	return (
		<div>
			<p className="clock">{time}</p>
		</div>
	);
};

export default Clock;
