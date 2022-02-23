import { IPropsStyled } from 'interfaces/styled';
import styled from 'styled-components';

import imgIconEmail from 'assets/images/email.svg';
import imgIconGit from 'assets/images/github.svg';
import imgIconLinkedin from 'assets/images/linkedin.svg';
import vetorContato from 'assets/images/vector-contato.svg';
import imgIconWhatsapp from 'assets/images/whatsapp.svg';

const Footer: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<footer id="contato" className={className}>
			<div className="container d-flex">
				<div className="title">
					<h3>Contato</h3>
				</div>

				<div className="img-Icon">
					<div className="col-6 col-lg-3">
						<div className="m-4">
							<a
								href="https://www.linkedin.com/in/thiagoaraujodev"
								target="_blank"
								title="linkedin"
								rel="noopener noreferrer"
							>
								<div className="img">
									<img src={imgIconLinkedin} alt="Icone Linkedin" />
								</div>
								<p>Linkedin</p>
							</a>
						</div>
					</div>

					<div className="col-6 col-lg-3">
						<div className="m-4">
							<a href="https://github.com/thiagoaraujodev" target="_blank" title="github" rel="noopener noreferrer">
								<div className="img">
									<img src={imgIconGit} alt="Icone Git" />
								</div>
								<p>Github</p>
							</a>
						</div>
					</div>

					<div className="col-6 col-lg-3">
						<div className="m-4">
							<a href="mailto:thiago72araujo@gmail.com" target="_blank" title="email" rel="noopener noreferrer">
								<div className="img">
									<img src={imgIconEmail} alt="Icone Email" />
								</div>
								<p>Email</p>
							</a>
						</div>
					</div>

					<div className="col-6 col-lg-3">
						<div className="m-4">
							<a
								href="https://api.whatsapp.com/send?phone=+5581985190654"
								target="_blank"
								title="whatsapp"
								rel="noopener noreferrer"
							>
								<div className="img">
									<img src={imgIconWhatsapp} alt="Icone Whatsapp" />
								</div>
								<p>Whatsapp</p>
							</a>
						</div>
					</div>
				</div>

				<p>Copyright ® {new Date().getFullYear()}</p>
			</div>
		</footer>
	);
};

export default styled(Footer)`
	height: 100%;
	width: 100%;
	padding-top: 65px;
	padding-bottom: 16px;
	position: relative;

	::before {
		content: '';
		height: 65px;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		background-color: #4581f6;
		z-index: -1;
	}

	& .title {
		width: 100%;
		margin-bottom: 50px;
		text-align: center;

		h3 {
			font-size: 35px;
			font-weight: 600;
			letter-spacing: 1px;
			color: #002265;
		}
	}

	& .d-flex {
		height: 100%;
		flex-direction: column;
		align-items: center;

		.img-Icon {
			height: 100%;
			width: 100%;
			padding-bottom: 80px;
			display: flex;
			flex-wrap: wrap;

			.img {
				height: 120px;
				position: relative;
				display: flex;
				flex-direction: column;

				img {
					max-height: 60px;
					max-width: 60px;
					margin: auto;
				}
			}

			.img::before {
				content: '';
				max-height: 120px;
				max-width: 120px;
				margin: auto;
				background-image: url(${vetorContato});
				background-repeat: no-repeat;
				background-size: contain;
				background-position: center;
				z-index: -1;
			}

			.img img,
			.img::before {
				height: 100%;
				width: 100%;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
			}

			p {
				color: #002265;
				font-size: 20px;
				line-height: 40px;
				letter-spacing: 1px;
				text-align: center;
			}
		}
	}

	& .d-flex > p {
		color: #fff;
		font-size: 15px;
		line-height: 30px;
		letter-spacing: 1px;
	}
`;
