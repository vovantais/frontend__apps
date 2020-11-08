import React, { useState, useEffect } from 'react'
import { API_TO_CONNECT_WEATHER } from '../Consts/consts';
import { useSelector } from "react-redux";

function Weather() {
	const initialState = {
		error: null,
		isLoaded: false,
		items: [],
	};

	const [weather, setWeather] = useState(initialState);
	const CITY = useSelector(({ auth }) => auth.auth.city);

	useEffect(() => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&lang=en&appid=09614ed9c1f7f523fb5ce134d47fc2a4&units=metric`)
			.then(res => res.json())
			.then(result => {
				setWeather({
					isLoaded: true,
					items: result,
				})
			})
			.catch(err => {
				setWeather({
					isLoaded: true,
					error: err.message,
				});
			})
	}, [])


	const { error, isLoaded, items } = weather;
	if (error) {
		return <p> Error {error.message}</p>
	} else if (!isLoaded) {
		return <h3 className='text-center'> Weather Loading ... </h3>
	} else {
		return (
			<div className='weather'>
				<h4 className='weather-city'>{CITY} {items.main.temp.toFixed(0)}°C</h4>
				<img src={`https://openweathermap.org/img/wn/${items.weather[0].icon}.png`} alt='icon' />
				<div className="weather-description">{items.weather[0].description}</div>
				<div className="weather-description">wind: {items.wind.speed} m/s</div>
				<div className="weather-description">humidity: {items.main.humidity} %</div>
			</div>
		);
	}
}

export default Weather;
