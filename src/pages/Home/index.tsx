/* eslint-disable prettier/prettier */
import CardPortfolio from 'components/CardPortfolio';
import CardSkill from 'components/CardSkill';
import { IPropsStyled } from 'interfaces/styled';
import styled from 'styled-components';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
// eslint-disable-next-line import-helpers/order-imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { itemsCarousel } from '../Home/listCarousel';

import imgIconApi from 'assets/images/api-icon.svg';
import imgIconMobile from 'assets/images/mobile-icon.svg';
import imgPcEstudando from 'assets/images/pc-estudando.png';
import imgIconSeo from 'assets/images/seo-icon.svg';
import imgIconWeb from 'assets/images/web-icon.svg';

SwiperCore.use([A11y, Autoplay, Navigation, Pagination, Scrollbar]);

const Home: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<section id="home" className={`${className} container mt-header`}>
				<div className="img col-12 col-md-6 order-md-1 px-5 px-md-2 mb-5 mb-md-0">
					<img src={imgPcEstudando} alt="Estudande tecnologia" />
				</div>

				<div className="contents col-12 col-md-6 order-md-0 pe-sm-3 mb-3 mb-lg-0">
					<h3>Olá, seja bem-vindo!</h3>
					<h1>
						Sou, Thiago Araujo.
						<br />
						Front-End Developer
					</h1>
					<p>
						Entusiasta em oferecer soluções em diferentes tipos de aplicações.
						<br />
						Contribuindo com meu conhecimento, efetuando entregas no prazo combinado, código limpo, organizado e sempre
						com foco na qualidade.
					</p>
				</div>
				<div className="img-Icon order-md-2">
					<img src={imgIconWeb} alt="Icone Web" />
					<img src={imgIconMobile} alt="Icone mobile" />
					<img src={imgIconSeo} alt="Icone SEO" />
					<img src={imgIconApi} alt="Icone API" />
				</div>
			</section>

			<div className="divider"></div>

			<section id="skills" className={`${className} container`}>
				<div className="title">
					<h3>Skills</h3>
				</div>
				<CardSkill />
			</section>

			<div className="divider"></div>

			<section id="portfolio" className={`${className} container`}>
				<div className="title">
					<h3>Portfólio</h3>
				</div>

				<Swiper
					loop={true}
					autoplay={{
						delay: 2500,
						pauseOnMouseEnter: true,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1200: {
							slidesPerView: 3,
						},
					}}
				>
					{itemsCarousel.map(item => {
						return (
							<SwiperSlide key={item.id}>
								<CardPortfolio
									cTitle={item.cTitle}
									cSubTitle={item.cSubTitle}
									cColor={item.cColor}
									cBackground={item.cBackground}
									cImg={item.cImg}
									cHrefGit={item.cHrefGit}
									cHrefDemo={item.cHrefDemo}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>

			<div className="divider"></div>
		</>
	);
};

export default styled(Home)`
	padding: 65px 16px !important;
	display: flex;
	flex-wrap: wrap;

	.img > img {
		max-width: 550px;
	}

	.contents {
		align-self: center;
	}

	h1 {
		font-size: 27px;
		font-weight: 600;
		line-height: 43px;
		letter-spacing: 1px;
		color: #002265;
	}
	h3 {
		font-size: 20px;
		font-weight: 500;
		line-height: 28px;
		letter-spacing: 1px;
		color: #002265;
	}
	p {
		font-size: 14px;
		font-weight: 400;
		line-height: 28px;
		color: #082032;
	}

	.img-Icon {
		max-height: 110px;
		max-width: 575px;
		width: 100%;
		margin: 0 auto;
		padding: 5px 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		gap: 9px;
		overflow: hidden;

		img {
			max-width: 100px;
			width: 100%;
			height: auto;
			transition: all 1s;
		}

		img:hover {
			transform: scale(1.1);
		}
	}

	.title {
		width: 100%;
		margin-bottom: 30px;
		text-align: center;

		h3 {
			margin: 0;
			font-size: 35px;
			font-weight: 600;
			line-height: 120%;
		}
	}

	&#portfolio {
		.swiper-container {
			height: 440px;
		}
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 29px;
			line-height: 50px;
		}
		h3 {
			font-size: 22px;
			line-height: 28px;
		}
		p {
			font-size: 15px;
			line-height: 30px;
		}
	}

	@media (min-width: 992px) {
		h1 {
			font-size: 40px;
			line-height: 60px;
		}
		h3 {
			font-size: 28px;
			line-height: 45px;
		}
		p {
			font-size: 17px;
			line-height: 34px;
		}

		.img-Icon {
			margin: 0;
		}
	}

	@media (min-width: 1200px) {
		h1 {
			font-size: 49px;
			line-height: 65px;
		}
		h3 {
			font-size: 32px;
			line-height: 50px;
		}
	}
`;
