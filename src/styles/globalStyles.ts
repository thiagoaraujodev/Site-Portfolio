import 'bootstrap/dist/css/bootstrap.css';
import { createGlobalStyle } from 'styled-components';

// @import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Montserrat:wght@300;400;600;700&family=Nanum+Pen+Script&family=Open+Sans:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap');

const GlobalStyle = createGlobalStyle`


/* 
	 font-family: 'Fredericka the Great', cursive;
	 font-family: 'Montserrat', sans-serif;
	 font-family: 'Nanum Pen Script', cursive;
	 font-family: 'Open Sans', sans-serif;
	 font-family: 'Poppins', sans-serif; 
*/

/*====  RESET ============================ */
* {
	margin: 0;
	padding: 0;
	border: none;
	text-decoration: none;
	box-sizing: border-box;
}

ul {
	list-style: none;
}

a {
	text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
}

img {
	width: 100%;
	height: auto;
}

iframe {
	width: 100%;
	height: 100%;
}

.container {
	padding: 0 16px;
}

@media (max-width: 767.98px) {
	.container-sm,
	.container {
		max-width: 100%;
	}
}

@media (min-width: 1400px) {
	.container-xxl,
	.container-xl,
	.container-lg,
	.container-md,
	.container-sm,
	.container {
		max-width: 1182px;
	}
}

/*==== VARIABLES ============================ */
:root {
	--color-primary: #4581f6;
	--bg-color-primary: #fbfcff;
}

/*===  BASE ============================ */
html {
	scroll-behavior: smooth;
}

body {
	font: 400 16px 'Poppins', sans-serif;
	-webkit-font-smoothing: antialiased;
	background: var(--bg-color-primary);
}

#root {
	min-height: calc(100vh - 80px);
}

.mt-header {
	margin-top: 45px;
}

.divider {
	border: 1px solid rgba(0, 0, 0, 0.16);
}

.bt-primary {
	padding: 10px 20px;
	font-size: 20px;
	font-weight: 600;
	text-align: center;
	color: var(--bg-color-primary) !important;
	background-color: var(--color-primary);
	border-radius: 10px;
	box-shadow: 0 1px 0 var(--color-primary);
}

.bt-primary:hover {
	opacity: 0.92;
}
.bt-primary:active {
	position: relative;
	top: 2px;
	box-shadow: none;
}


@media (min-width: 768px) {
	.mt-header {
		margin-top: 82px;
	}
}

`;
export default GlobalStyle;
