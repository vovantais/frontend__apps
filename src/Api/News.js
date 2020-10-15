import React, { useState, useEffect } from 'react';
import { API_TO_CONNECT_NEWS } from '../Consts/consts';
import { Jumbotron as Jombo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Section = styled.section`
	.jumbo{
		background-color: #153449;
	}
	.news-title {
		color:#fff;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 2.2px;
	}
	.col-md-8{
		margin-left: 50px;
	}
	`;
function News() {
	const initialState = {
		error: null,
		isLoaded: false,
		items: [],
	};
	const [infoCurs, setInfoCurs] = useState(initialState);
	useEffect(() => {
		const request = fetch(API_TO_CONNECT_NEWS)
			.then(res => res.json())
			.then(
				(result) => {
					setInfoCurs({
						isLoaded: true,
						items: result.articles,
					});
				})
			.catch((error) => {
				setInfoCurs({
					isLoaded: true,
					error,
				});
			})
	}, [])
	const { error, isLoaded, items } = infoCurs;
	console.log(error);
	const CursInfo = (
		<Section>
			<div className=" list ml-auto" >
				<Jombo className='jumbo'>
					<h3 className='news-title'>top business news</h3>
				</Jombo>
				{
					items.map(item => {
						return (
							<Container fluid='lg'>
								<div div div className='row NewsGrid'>
									<div className='col-md-3'>
										<img src={item.urlToImage} alt='News thumbnail' width={300} height={220} className='rounded' />
									</div>
									<div className="col-md-8 " key={item.name} >
										<h3> Title : {item.title} </h3><br />
										<h5> Description  : {item.description}</h5>
										<p> Content : {item.content.length > 200 ? item.content.slice(0, 200) : item.content}</p>
										<h6> Author : {item.author}</h6>
										<h6> Published at : {item.publishedAt.replace(/[T,Z]/gi, " ")} </h6>
										<a href={item.url} className='btn btn-md btn-info btn-active' target='_blank' >READ MORE</a>
									</div>
								</div>
							</Container>
						);
					})
				}
			</div >
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

export default News;
