import { memo, useEffect, useState } from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/Home';
import GlobalStyle from 'styles/globalStyles';

const Pages = memo(() => {
	const [isVisable, setIsVisable] = useState(false);

	const togleVisibility = () => {
		if (window.scrollY > 80) {
			setIsVisable(true);
		} else {
			setIsVisable(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', togleVisibility);

		return () => {
			window.removeEventListener('scroll', togleVisibility);
		};
	}, []);

	return (
		<>
			<BrowserRouter>
				<GlobalStyle />
				<Header />

				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/404"
							element={
								<h1
									style={{
										margin: '100px 0 20px 16px',
									}}
								>
									Página não encontrada
								</h1>
							}
						/>
						<Route path="*" element={<Navigate replace to="/404" />} />
					</Routes>
				</main>

				<Footer />

				{isVisable ? (
					<button
						style={{
							padding: '10px',
							position: 'fixed',
							bottom: '10px',
							right: '10px',
							color: '#fbfcff',
							backgroundColor: '#4581f6',
							borderRadius: '25px',
							transition: 'all 0.3s ease 0s',
							cursor: 'pointer',
							zIndex: '999',
						}}
						onClick={() =>
							window.scroll({
								top: 0,
								behavior: 'smooth',
							})
						}
					>
						<BsChevronDoubleUp size={20} />
					</button>
				) : (
					''
				)}
			</BrowserRouter>
		</>
	);
});

export default Pages;
