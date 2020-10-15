import React from 'react';
import { Jumbotron as Jombo } from 'react-bootstrap';
import franclin from '../img/franclin.jpg';
import buffet from '../img/buffet.png';
import geyts from '../img/geyts.jpg';
import styled from 'styled-components';
import mainBG from '../img/mainBG1.jpg';

const Section = styled.section`
	.jumbo{
		background: url(${mainBG}) no-repeat fixed bottom;
		background-size: cover;
		color: #efefef;
		position: relative;
		z-index: -2;
	}
	.overlay{
		background: #000;
		opacity: 0.7;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}
`;

function Jumbotron() {
   return (
      <Section>
         <Jombo fluid className='jumbo'>
            <div className='overlay'></div>
            <div className="mb-wrap mb-style">
               <div className="mb-thumb "><img className='Franklin' src={franclin} /></div>
               <blockquote>
                  <p>Thrift. - Spend money only on what benefits me or others, that is, do not waste anything.</p>
               </blockquote>
               <div className="mb-attribution">
                  <p className="mb-author">Benjamin Franklin</p>
               </div>
            </div>
            <div className="mb-wrap mb-style">
               <div className="mb-thumb "><img className='Buffett' src={buffet} /></div>
               <blockquote>
                  <p>The most successful people are those who do what they love.</p>
               </blockquote>
               <div className="mb-attribution">
                  <p className="mb-author">Warren Buffett</p>
               </div>
            </div>
            <div className="mb-wrap mb-style">
               <div className="mb-thumb "><img className='Buffett' src={geyts} /></div>
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
