import React, { useState, useEffect } from 'react'
import { API_EXCHANGE_RATES } from '../Consts/consts';
import { Spinner } from 'react-bootstrap';

function ExchangeRates() {
	const initialState = {
		error: null,
		isLoaded: false,
		items: [],
	};
	const [infoCurs, setInfoCurs] = useState(initialState);
	useEffect(() => {
		fetch(API_EXCHANGE_RATES)
			.then(res => res.json())
			.then(
				(result) => {
					setInfoCurs({
						...infoCurs,
						isLoaded: true,
						items: result,
					});
				},
				(error) => {
					setInfoCurs({
						...infoCurs,
						isLoaded: false,
						error,
					});
				}
			)
	}, [])
	const { error, isLoaded, items } = infoCurs;
	const CursInfo = (
		<>
			<ul className='exchange'>
				<h3 className='exchange-title'>exchange rates</h3>
				{
					items.map(item => {
						if (item.Cur_ID === 145 || item.Cur_ID === 292 || item.Cur_ID === 298 || item.Cur_ID === 293) return (
							<li key={item.Cur_ID} className='exchange-cur'>
								<strong>{item.Cur_OfficialRate} <span>{item.Cur_Abbreviation}</span> </strong>
							</li>)
					})
				}
			</ul>
		</>

	);
	if (error) {
		return <p> Error {error.message}</p>
	} else if (!isLoaded) {
		return <div className='text-center'> <Spinner animation="border" /> Loading...</div>
	} else {
		return CursInfo;
	}
}

export default ExchangeRates
