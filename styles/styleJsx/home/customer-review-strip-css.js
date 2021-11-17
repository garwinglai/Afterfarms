import css from "styled-jsx/css";

export default css`
	.lnYkEj {
		position: relative;
	}

	.lnYkEj > div {
		padding: 100px 35px !important;
		background-color: #f1c34a;
		position: relative;
	}

	.lnYkEj .image-container {
		margin-bottom: 30px;
		text-align: center;
	}

	.ejDqyh .desktop {
		display: none;
	}

	.lnYkEj .ig-card {
		margin-bottom: 35px;
		background: var(--white);
		border-radius: 8px;
		overflow: hidden;
	}

	.lnYkEj .ig-card img {
		width: 102%;
		margin-left: -3px;
	}

	.lnYkEj .ig-card div {
		display: grid;
		grid-template-columns: 60px 1fr;
		margin: 0px;
		padding: 5px 25px 5px 0px;
	}

	.lnYkEj .ig-card div span {
		text-align: center;
		padding-top: 15px;
	}

	.lnYkEj .ig-card div span img {
		width: 30px;
		margin-left: 40px;
	}

	.lnYkEj .ig-card:last-child {
		margin-bottom: 0px;
	}

	.ejDqyh .divider-blob {
		width: 100%;
	}

	@media screen and (min-width: 801px) {
		.lnYkEj > div {
			padding: 20px 75px 70px;
			background-position: 0px 100px, 100% 80%;
			background-size: 30%, 30%;
		}

		.lnYkEj .inner-container {
			max-width: 1200px;
			margin: 0px auto;
		}

		.lnYkEj .image-container {
			margin-bottom: 0px;
		}

		.lnYkEj .image-container img {
			max-width: 1200px;
			width: 100%;
		}

		.ejDqyh .mobile {
			display: none;
		}

		.ejDqyh .desktop {
			display: block;
		}

		.lnYkEj .card-grid,
		.lnYkEj .say-it-better.desktop {
			display: flex;
			align-items: flex-end;
		}

		.lnYkEj .card-grid {
			margin: 0px -20px;
		}

		.lnYkEj .ig-card {
			width: 33.33%;
			height: 100%;
			margin: 0px 20px;
		}

		.lnYkEj .ig-card div {
			grid-template-columns: 86px 1fr;
			padding: 35px 40px 35px 0px;
		}

		.ejDqyh .desktop-inline {
			display: inline;
		}
	}

	@media screen and (max-width: 800px) {
		.lnYkEj .ig-card div span img {
			margin-left: 0;
			width: 100%;
		}

		.lnYkEj {
			${'' /* zoom: 150%; */}
		}
	}

	@media screen and (max-width: 300px) {
		.lnYkEj {
			${'' /* zoom: 120%; */}
		}
	}
`;
