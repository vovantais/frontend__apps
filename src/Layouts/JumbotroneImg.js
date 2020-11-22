import React from 'react';
import { Jumbotron as Jombo } from 'react-bootstrap';
import styled from 'styled-components';
import mainBG from '../Img/mainBG1.jpg';

const Section = styled.section`
	.jumbo{
		background: url(${mainBG}) no-repeat;
		background-position:center;
		background-size: cover;
		color: #efefef;
		width:100%;
		height: 100%;
		position: absolute;
		top:0;
		left:0;
		rigth:0;
		bottom:0;
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
