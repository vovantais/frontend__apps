import React from 'react';
import { Jumbotron as Jombo } from 'react-bootstrap';
import franclin from '../Img/franclin.jpg';
import buffet from '../Img/buffet.png';
import geyts from '../Img/geyts.jpg';
import styled from 'styled-components';
import mainBG from '../Img/mainBG1.jpg';

const Section = styled.section`
	.jumbo{
		background: url(${mainBG}) no-repeat fixed bottom;
		background-size: cover;
		color: #efefef;
		position: relative;
		z-index: -2;
	}
`;

function Jumbotron() {
	return (
		<Section>
			<Jombo fluid className='jumbo'>
				<div className='overlay'></div>
				<div className="mb-wrap mb-style">
					<div className="mb-thumb "><img className='Franklin' src={franclin} alt="franclin" /></div>
					<blockquote>
						<p>Thrift. - Spend money only on what benefits me or others, that is, do not waste anything.</p>
					</blockquote>
					<div className="mb-attribution">
						<p className="mb-author">Benjamin Franklin</p>
					</div>
				</div>
				<div className="mb-wrap mb-style">
					<div className="mb-thumb "><img className='Buffett' src={buffet} alt="buffet" /></div>
					<blockquote>
						<p>The most successful people are those who do what they love.</p>
					</blockquote>
					<div className="mb-attribution">
						<p className="mb-author">Warren Buffett</p>
					</div>
				</div>
				<div className="mb-wrap mb-style">
					<div className="mb-thumb "><img className='Gates' src={geyts} alt="geyts" /></div>
					<blockquote>
						<p>When you have a good idea, act immediately.</p>
					</blockquote>
					<div className="mb-attribution">
						<p className="mb-author">Bill Gates</p>
					</div>
				</div>
			</Jombo>
		</Section>
	)
}

export default Jumbotron;
