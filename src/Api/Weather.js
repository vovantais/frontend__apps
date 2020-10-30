import React, { useState, useEffect } from 'react'
import { API_TO_CONNECT_WEATHER } from '../Consts/consts';
import { Container } from 'react-bootstrap';

function Weather() {
	const initialState = {
		error: null,
		isLoaded: false,
		items: [],
	};
	const [weather, setWeather] = useState(initialState);

	useEffect(() => {
		fetch(API_TO_CONNECT_WEATHER)
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
		return (<Container>
			<div className='weather'>
				<h4>{items.main.temp.toFixed(0)}°C</h4>
				<img src={`https://openweathermap.org/img/wn/${items.weather[0].icon}.png`} alt='icon' />
				<div className="weather-description">{items.weather[0].description}</div>
				<div className="weather-wind">wind: {items.wind.speed} m/s</div>
				<div className="weather-wind">humidity: {items.main.humidity} %</div>
			</div>
		</Container>
		);
	}
}

export default Weather;
