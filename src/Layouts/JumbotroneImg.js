import React from 'react';
import { Jumbotron as Jombo } from 'react-bootstrap';
import styled from 'styled-components';
import mainBG from '../img/mainBG1.jpg';

const Section = styled.section`
	.jumbo{
		background: url(${mainBG}) no-repeat fixed bottom;
		background-size: cover;
		color: #efefef;
		height: 1000px;
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

function JumbotroneImg() {
   return (
      <Section>
         <Jombo fluid className='jumbo'>
            <div className='overlay'></div>
         </Jombo>
      </Section>
   )
}

export default JumbotroneImg;
