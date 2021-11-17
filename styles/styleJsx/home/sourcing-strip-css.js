import css from "styled-jsx/css";

export default css`
	.gJhnqg {
		padding: 100px 0px 0px;
		background-color: rgb(242, 215, 154);
	}

	.gJhnqg > div {
		display: flex;
		${"" /* flex-direction: column-reverse; */}
		justify-content: center;
		padding-bottom: 35px;
	}

	.text-container {
		width: 50%;
	}

	.gJhnqg h2,
	.gJhnqg p {
		${"" /* padding: 0px 40px; */}
		margin: 0px;
	}

	.gJhnqg h2 {
		margin-bottom: 35px;
		padding-bottom: 20px;
		font-size: 40px;
	}

	.gJhnqg img {
		width: 100%;
	}

	/* Divider mobile & desktop */
	.gJhnqg .desktop-image {
		width: 100%;
		box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
	}

	.ejDqyh .divider-blob {
		width: 100vw;
	}

	.ejDqyh .desktop {
		display: none;
	}

	.desktop-image {
		width: auto !important;
		height: 600px !important;
		object-fit: cover;
	}

	.text-container p {
		margin-right: 50px;
	}

	@media screen and (min-width: 1300px) {
		.gJhnqg .image-container {
			margin: -35 px -100 px -50 px 0 px;
		}
	}

	@media screen and (min-width: 801px) {
		.gJhnqg {
			padding: 100px 0px 0px;
		}

		.gJhnqg > div {
			padding: 0px 0px 100px 35px;
			-webkit-box-align: center;
			align-items: center;
		}

		.ejDqyh h2.desk-small {
			font-size: 36px;
			line-height: 46px;
		}

		.ejDqyh p.desk-med {
			font-size: 20px;
			line-height: 30px;
		}

		.ejDqyh .mobile {
			display: none;
		}

		/* divider mobile & desktop */
		.ejDqyh .mobile {
			display: none;
		}

		.ejDqyh .desktop {
			display: block;
		}
	}

	@media screen and (max-width: 800px) {
		.gJhnqg {
			padding-top: 50px;
		}
		.grid-2-max {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.grid-2-max .text-container {
			width: 90%;
			${"" /* zoom: 130%; */}
		}

		.grid-2-max .text-container h2 {
			font-size: 30px !important;
		}

		.grid-2-max .text-container p {
			zoom: 120%;
		}

		.grid-2-max img {
			box-shadow: none;
			height: 700px !important;
			width: 100% !important;
			margin-top: 20px;
			object-fit: cover !important;
			${"" /* object-position: right -40px; */}
		}

		.text-container p {
			margin-right: 0;
			margin-bottom: 20px;
		}
	}

	@media screen and (max-width: 1024px) {
		.gJhnqg {
			${"" /* zoom: 120%; */}
		}
	}
`;
