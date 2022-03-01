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
						/>
						<Product></Product>
					</Row>
					<Row>
						<Product></Product>
						<Product></Product>
						<Product></Product>
					</Row>
					<Row>
						<Product></Product>
					</Row>
				</Content>
			</HomeContainer>
		</Container>
	);
};

export default Home;
