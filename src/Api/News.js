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
	`;
function News() {
	const initialState = {
		error: null,
		isLoaded: false,
		items: [],
	};
	const [news, setNews] = useState(initialState);
	useEffect(() => {
		fetch(API_TO_CONNECT_NEWS)
			.then(res => res.json())
			.then(
				(result) => {
					setNews({
						isLoaded: true,
						items: result.articles,
					});
				})
			.catch((error) => {
				setNews({
					isLoaded: true,
					error,
				});
			})
	}, [])
	const { error, isLoaded, items } = news;
	const getNews = (
		<Section>
			<div className=" list ml-auto " >
				<Jombo className='jumbo'>
					<h3 className='news-title'>top business news</h3>
				</Jombo>
				{
					items.map((item, index) => {
						if (item.content == null || item.description == null || item.author == null) {
							return;
						}
						return (
							<Container className='lg' key={index}>
								<div className='row NewsGrid'>
									<div className='col-md-3'>
										<img src={item.urlToImage} alt='News thumbnail' width={260} height={210} className='rounded' />
									</div>
									<div className="col-md-9">
										<h3 className='news-title-artical'>  {item.title} </h3><br />
										<h5 className='news-description'>  {item.description}</h5>
										<p className='news-content'>   {item.content.length > 200 ? item.content.slice(0, 200) : item.content}</p>
										<p> <strong>Author :</strong> {item.author}</p>
										<p > <strong>Published at :</strong> {item.publishedAt.replace(/[T,Z]/gi, " ")} </p>
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
		return <h3 className='text-center'> News Loading ... </h3>
	} else {
		return getNews;
	}
}

export default News;
