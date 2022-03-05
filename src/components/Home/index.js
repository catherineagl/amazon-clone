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
						<Product
							title="Apple iPhone 12 (128GB, Blue) [Locked] + Carrier Subscription"
							price={984.0}
							image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg"
							rating={4}
							id={uniqid()}
						/>
						<Product
							title="Dell Inspiron 15 3511, 15.6 inch FHD Non-Touch Laptop - Intel Core i3-1115G4, 8GB DDR4 RAM, 256GB SSD, Intel UHD Graphics, Windows 11 Home - Carbon Black (Latest Model)"
							price={456.0}
							image="https://m.media-amazon.com/images/I/81x8wuiiloS._AC_UY218_.jpg"
							rating={4}
							id={uniqid()}
						/>
						<Product
							title="Playstation 5 Disc Version PS5 Console - 4K-TV Gaming, 16GB GDDR6 RAM, 8K Output, WiFi 6. Ultra-High Speed 825GB SSD - U Deal"
							price={1199.0}
							image="https://m.media-amazon.com/images/I/61982vi8l4L._AC_UY218_.jpg"
							rating={5}
							id={uniqid()}
						/>
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
