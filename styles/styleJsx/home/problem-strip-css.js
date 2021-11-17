import css from "styled-jsx/css";

export default css`
	/* ~~~~~~~~~~~~~ The Ugly Problem ~~~~~~~~~~~~~ */
	.jXiwEV {
		padding: 100px 35px 0;
		position: relative;
		top: -7px;
		height: 550px;
	}

	.jXiwEV .image-container {
		text-align: center;
		${'' /* width: 50%; */}
		height: auto;
		${'' /* max-width: 400px; */}
		${'' /* margin: 0px 0 0 50px; */}
	}

	.jXiwEV .image-container img {
		width: 100%;
		object-fit: cover;
		${'' /* margin-right: 30px; */}
		height: auto;
	}

	.ejDqyh .desktop {
		display: none;
	}

	.jXiwEV p {
		margin: 15px 0px 35px;
	}

	.grid-2-max {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.grid-2-max h1 {
		font-size: 40px;
		padding-bottom: 20px;
	}

	.description-container {
		width: 50% !important;
		margin-right: 0;
		padding-left: 30px;
	}

	@media screen and (min-width: 801px) {
		.jXiwEV {
			padding-bottom: 0px;
		}

		.jXiwEV > div {
			-webkit-box-align: center;
			align-items: center;
		}

		.jXiwEV > div > div {
			${'' /* padding-bottom: 18px; */}
		}

		.jXiwEV > div .image-container {
			margin-bottom: 0px;
			position: relative;
			width: 50%;
		}

		.jXiwEV > div .image-container img {
			width: 100%;
		}

		.jXiwEV > div > div {
			${'' /* padding-bottom: 18px; */}
		}

		.jXiwEV > div > div:nth-child(2) {
			${'' /* padding: 40px; */}
		}

		.ejDqyh .mobile {
			display: none;
		}

		.ejDqyh .desktop {
			display: block;
		}

		.ejDqyh p.desk-med {
			font-size: 20px;
			line-height: 30px;
		}
	}

	@media screen and (max-width: 800px) {
		.jXiwEV {
			height: 100%;
		}
		.grid-2-max {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			${'' /* zoom: 150%; */}
		}

		.image-container {
			width: 100%;
			margin-left: 0 !important;
		}

		.image-container img {
			width: 100%;
		}

		.description-container {
			width: 100% !important;
			padding: 0 !important;
		}

		.description-container p {
			zoom: 110%;
		}

		.description-container h1 {
			font-size: 35px;
		}
	}

`;
