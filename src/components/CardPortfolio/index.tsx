import { IPropsStyled } from 'interfaces/styled';
import styled from 'styled-components';

interface IProps extends IPropsStyled {
	cTitle: string;
	cSubTitle: string;
	cColor: string;
	cBackground: string;
	cImg: string;
	cHrefGit: string;
	cHrefDemo: string;
}

const CardPortfolio: React.FC<IProps> = ({ ...props }) => {
	return (
		<div className={props.className}>
			<img src={props.cImg} alt={props.cTitle} />
			<p className="sub-title">{props.cSubTitle}</p>
			<p className="title-portfolio">{props.cTitle}</p>

			<div>
				<a
					href={props.cHrefGit}
					target="_blank"
					title={`Github ${props.cTitle}`}
					rel="noopener noreferrer"
					className="bt-git"
				>
					Github
				</a>

				<a
					href={props.cHrefDemo}
					target="_blank"
					title={`Demo ${props.cTitle}`}
					rel="noopener noreferrer"
					className={props.cHrefDemo !== '' ? 'bt-demo' : 'd-none'}
				>
					Demo
				</a>
			</div>
		</div>
	);
};

export default styled(CardPortfolio)`
	max-height: 365px;
	width: 95%;
	max-width: 320px;
	padding: 16px;
	margin: 10px auto;
	font-family: 'Montserrat', sans-serif;
	text-align: center;
	display: flex;
	flex-direction: column;
	${({ cBackground }) => (cBackground ? `background: ${cBackground}` : '')};
	${({ cColor }) => (cColor ? `box-shadow: 0px 0px 6px 1px ${cColor}b3` : '')};
	border-radius: 10px;
	overflow: hidden;

	.title-portfolio {
		margin: 14px 0;
		font-size: 25px;
		font-weight: 600;
		line-height: 120%;
		${({ cColor }) => (cColor ? `color: ${cColor}` : '')};
		z-index: 1;
	}

	.sub-title {
		margin-top: 14px;
		font-size: 13px;
		font-weight: 600;
		line-height: 120%;
		${({ cColor }) => (cColor ? `color: ${cColor}` : '')};
		z-index: 1;
	}

	& > div {
		height: 45px;
		margin-top: auto;
		display: flex;
		justify-content: space-between;

		.bt-git,
		.bt-demo {
			width: 100%;
			height: 100%;
			font-size: 22px;
			font-weight: 600;
			line-height: 120%;
			letter-spacing: 0.05em;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 6px;
		}
		.bt-git {
			margin-right: 8px;
			${({ cColor }) => (cColor ? `color: ${cColor}` : '')};
			${({ cColor }) => (cColor ? `border: 1px solid ${cColor}` : '')};
		}
		.bt-demo {
			margin-left: 8px;
			color: #fff;
			${({ cColor }) => (cColor ? `background-color: ${cColor}` : '')};
		}
		.bt-git:hover,
		.bt-demo:hover {
			opacity: 0.8;
		}
		.bt-git:active,
		.bt-demo:active {
			position: relative;
			top: 2px;
			box-shadow: none;
		}
	}

	& > img {
		max-height: 200px;
		${({ cColor }) => (cColor ? `border: 1px solid ${cColor}` : '')};
		border-radius: 7px;
	}
`;
