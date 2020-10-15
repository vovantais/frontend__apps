import React, { useState, useEffect } from 'react'
import { API_EXCHANGE_RATES } from '../Consts/consts';
import styled from 'styled-components';

const Section = styled.section`
	display: flex;
	justify-content: end;
	align-items: end;
	margin: 0px 20px 0px 0px;
	.list{
		border:1px solid black;
		padding: 20px ;
		font-size: 20px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		text-transform: uppercase;
	}
	.list h3{
		text-transform: uppercase;
	}
`;

function ExchangeRates() {
	const initialState = {
		error: null,
		isLoaded: false,
		items: [],
	};
	const [infoCurs, setInfoCurs] = useState(initialState);
	useEffect(() => {
		const request = fetch(API_EXCHANGE_RATES)
			.then(res => res.json())
			.then(
				(result) => {
					setInfoCurs({
						isLoaded: true,
						items: result,
					});
				},
				(error) => {
					setInfoCurs({
						isLoaded: true,
						error,
					});
				}
			)
	}, [])
	const { error, isLoaded, items } = infoCurs;
	const CursInfo = (
		<Section>
			<ul className="list ml-auto" >
				<h3>exchange rates</h3>
				{
					items.map(item => {
						if (item.Cur_ID === 145 || item.Cur_ID === 292 || item.Cur_ID === 298 || item.Cur_ID === 293) return (
							<li key={item.Cur_ID}>
								<strong>{item.Cur_OfficialRate} {item.Cur_Abbreviation} </strong>
							</li>)
					})
				}
			</ul>
		</Section >

	);
	if (error) {
		return <p> Error {error.message}</p>
	} else if (!isLoaded) {
		return <p>Loading ...</p>
	} else {
		return CursInfo;
	}
}

export default ExchangeRates
