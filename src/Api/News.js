import React, { useState, useEffect } from 'react';
import { API_TO_CONNECT_NEWS } from '../Consts/consts';
import { Jumbotron as Jombo, Container, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import PaginationNews from '../Layouts/PaginationNews';
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
		items: null,
		currentPage: 0,
	};

	const [news, setNews] = useState(initialState);

	const slicePagination = (array, count) => {
		const parts = [];
		for (let i = 0; i < array.length; i = i + count) {
			const [...newArray] = array;
			parts.push(newArray.splice(i, count));
		}
		return parts;
	};

	useEffect(() => {
		fetch(API_TO_CONNECT_NEWS)
			.then(res => res.json())
			.then(
				(result) => {
					setNews({
						...news,
						isLoaded: true,
						items: slicePagination(result.articles, 5),
					});
				})
			.catch((error) => {
				setNews({
					...news,
					isLoaded: false,
					error,
				});
			})

	}, [])

	const { error, isLoaded, items, currentPage } = news;

	const paginate = (pageNumber) => setNews({ ...news, currentPage: pageNumber })

	const nextPage = () => {
		if (currentPage < items.length - 1) {
			setNews({ ...news, currentPage: currentPage + 1 })
		}
	}

	const prevPage = () => {
		if (currentPage > 0) {
			setNews({ ...news, currentPage: currentPage - 1 })
		}
	}

	const firstPage = () => {
		if (currentPage > 0) {
			setNews({ ...news, currentPage: 0 })
		}
	}

	const lastPage = () => {
		if (currentPage < items.length - 1) {
			setNews({ ...news, currentPage: items.length - 1 })
		}
	}


	if (error) {
		return <p> Error {error.message}</p>
	} else if (!isLoaded) {
		return <div className='text-center'> <Spinner animation="border" />News Loading...</div>
	} else {
		return (
			<Section>
				<div className=" list ml-auto " >
					<Jombo className='jumbo'>
						<h3 className='news-title'>top business news</h3>
					</Jombo>
					{
						items && items[currentPage].map((item, index) => {
							if (item.content == null || item.description == null || item.author == null) {
								return null;
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
											<p> <strong>Published at :</strong> {item.publishedAt.replace(/[T,Z]/gi, " ")} </p>
											<a href={item.url} className='btn btn-md btn-info btn-active' target='_blank' >READ MORE</a>
										</div>
									</div>
								</Container>
							);
						})
					}
					<PaginationNews {...{ len: items.length, paginate, nextPage, prevPage, firstPage, lastPage, currentPage }} />
				</div >
			</Section >
		)
	}
}

export default News;
