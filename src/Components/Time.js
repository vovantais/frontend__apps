import React, { useState } from 'react';
import { useSelector } from "react-redux";
function Time() {
	const initialState = {
		time: new Date(),
	}
	const [time, setTime] = useState(initialState);
	const name = useSelector(({ auth }) => auth.auth.userName);

	const getTimeZone = () => {
		let timeZone = '';
		let today = new Date(),
			hour = today.getHours();
		if (hour >= 6 && hour < 12) {
			timeZone = 'Morning';
		}
		if (hour >= 12 && hour < 18) {
			timeZone = 'Day';
		}
		if (hour >= 18 && hour < 24) {
			timeZone = 'Evening';
		}
		if (hour >= 0 && hour < 6) {
			timeZone = 'Nigth';
		}
		return `Good ${timeZone}`;
	}
	const getTime = () => {
		setInterval(() => {
			setTime({
				...time,
			});
		}, 1000);
	}

	return (
		<div className='time'>
			<p className='today'>{getTimeZone()} {name} </p>
			<p className='today'>today {initialState.time.toLocaleDateString()}</p>
			<h2 className='clock'>{initialState.time.toLocaleTimeString()}</h2>
			{getTime()}
		</div>
	)
}

export default Time;
