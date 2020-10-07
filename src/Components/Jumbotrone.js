import React from 'react';
import { Jumbotron as Jombo, Container } from 'react-bootstrap';
import franclin from '../img/franclin.jpg';
import buffet from '../img/buffet.png';
import geyts from '../img/geyts.jpg';
function Jumbotron() {
	return (
		<Jombo fluid className='jumbo'>
			<div className='overlay'></div>
			<Container >
				<div class="mb-wrap mb-style">
					<div class="mb-thumb "><img className='Franklin' src={franclin} /></div>
					<blockquote>
						<p>Thrift. - Spend money only on what benefits me or others, that is, do not waste anything.</p>
					</blockquote>
					<div class="mb-attribution">
						<p class="mb-author">Benjamin Franklin</p>
					</div>
				</div>
				<div class="mb-wrap mb-style">
					<div class="mb-thumb "><img className='Buffett' src={buffet} /></div>
					<blockquote>
						<p>The most successful people are those who do what they love.</p>
					</blockquote>
					<div class="mb-attribution">
						<p class="mb-author">Warren Buffett</p>
					</div>
				</div>
				<div class="mb-wrap mb-style">
					<div class="mb-thumb "><img className='Buffett' src={geyts} /></div>
					<blockquote>
						<p>When you have a good idea, act immediately.</p>
					</blockquote>
					<div class="mb-attribution">
						<p class="mb-author">Bill Gates</p>
					</div>
				</div>
			</Container>
		</Jombo>
	)
}

export default Jumbotron;
