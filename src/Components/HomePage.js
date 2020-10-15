import React from 'react';
import ExchangeRates from '../Api/ExchangeRates';
import News from '../Api/News';

function HomePage() {
	return (
		<>
			<h2>HomePage</h2>
			<ExchangeRates />
			<News />
		</>
	)
}

export default HomePage;
