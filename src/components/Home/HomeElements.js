import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.main`
	display: flex;
	justify-content: center;
	margin: 0 auto;
	max-width: 1500px;
`;

export const HomeContainer = styled.div`
	width: 100%;
`;

//SLIDER ELEMENTS//
export const ImgContainer = styled.div`
	max-width: 1500px;
	margin: auto;
	z-index: -1;
	margin-bottom: 150px;

	img {
		width: 100%;
		z-index: -1;
		margin-bottom: -150px;
		object-fit: cover;
	}
`;

export const ImgSlider = styled(Slider)`
	max-width: 1500px;
	margin: auto;

	.slick-arrow {
		margin: 0 2rem;
		z-index: 100;
		cursor: pointer;
	}
	.slick-prev,
	.slick-next {
		top: 25%;
	}
`;

//END SLIDER ELEMENTS///

//STARTING PRODUCTS ROWS
export const Content = styled.div`
	transform: translateY(-150px); //
	margin: auto;
`;

export const Row = styled.div`
	display: flex;
	z-index: 1;
	margin: 0 5px;
`;
