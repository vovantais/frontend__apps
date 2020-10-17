import React from 'react';
import { Jumbotron as Jombo } from 'react-bootstrap';
import styled from 'styled-components';
import mainBG from '../Img/mainBG1.jpg';

const Section = styled.section`
	.jumbo{
		background: url(${mainBG}) no-repeat fixed bottom;
		background-size: cover;
		color: #efefef;
		height: 1000px;
		position: relative;
		z-index: -2;
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
