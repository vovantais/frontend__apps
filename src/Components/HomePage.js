import React from 'react';
import ExchangeRates from '../Api/ExchangeRates';
import News from '../Api/News';
import Weather from '../Api/Weather';
import Time from '../Layouts/Time';

function HomePage() {
	return (
		<>
			<Time />
			<Weather />
			<ExchangeRates />
			<News />
		</>
	)
}

export default HomePage;
