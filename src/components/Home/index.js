import React from 'react';
import {
	Container,
	Content,
	HomeContainer,
	ImgContainer,
	ImgSlider,
	Row,
} from './HomeElements';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from '../Product';
import uniqid from 'uniqid';

let settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
};

const Home = () => {
	return (
		<Container>
			<HomeContainer>
				<ImgSlider {...settings}>
					<ImgContainer>
						<img
							src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg"
							alt="banner"
						/>
					</ImgContainer>

					<ImgContainer>
						<img
							src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
							alt="banner"
						/>
					</ImgContainer>
					<ImgContainer>
						<img
							src="https://m.media-amazon.com/images/I/61shpu9mvML._SX3000_.jpg"
							alt="banner"
						/>
					</ImgContainer>
				</ImgSlider>

				<Content>
					<Row>
						<Product
							title="Bluetooth Headphones"
							price={28.99}
							image="https://m.media-amazon.com/images/I/41LR93r46HL._AC_SY200_.jpg"
							rating={4}
							id={uniqid()}
						/>
						<Product
							title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
							price={299.0}
							image="https://m.media-amazon.com/images/I/61-PblYntsL._AC_UY218_.jpg"
							rating={5}
							id={uniqid()}
						/>
					</Row>
					<Row>
						<Product />
						<Product />
						<Product />
					</Row>
					<Row>
						<Product
							title="SAMSUNG 65-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN65AU8000FXZA, 2021 Model)"
							price={900}
							image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UY218_.jpg"
							rating={5}
							id={uniqid()}
						/>
					</Row>
				</Content>
			</HomeContainer>
		</Container>
	);
};

export default Home;
