import React from 'react';
import ExchangeRates from '../Api/ExchangeRates';
import News from '../Api/News';
import Weather from '../Api/Weather';
import Time from '../Components/Time';

function HomePage() {
	return (
		<div className='wrapper'>
			<div className='wrapper-flex'>
				<Time />
				<Weather />
				<ExchangeRates />
			</div>
			<News />
		</div >
	)
}

export default HomePage;
