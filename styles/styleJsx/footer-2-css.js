import css from "styled-jsx/css";

export default css`
	.Footer2 {
		${"" /* height: 100vh; */}
		padding-top: 20px;
		padding-bottom: 50px;
		box-shadow: 0px 0 10px rgba(0, 0, 0, 0.8);
		z-index: 1000;
	}

	.Footer2-instagram {
		text-align: center;
		margin-bottom: 50px;
	}

	.instagram-images {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 5 px;
	}

	.instagram-images div img {
		width: 90%;
		height: 88%;
		object-fit: cover;
	}

	.social-icons {
		${"" /* margin-bottom: 30px; */}
		text-align: center;
	}

	.social-icons a img {
		width: 50px;
		height: 50px;
	}

	.Footer2-info-container {
		width: 100%;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		${"" /* margin-top: -100px; */}
		${"" /* gap: -20px; */}
	}

	.info-links {
		padding-top: 1.33em;
		display: flex;
		flex-direction: column;
		width: 90%;
		${"" /* flex-direction: column; */}
		justify-content: space-between;
		${"" /* width: 25%; */}
	}

	.links-container {
		display: flex;
		justify-content: space-between;
	}

	.info-link-one {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.info-link-two {
		display: flex;
		justify-content: flex-start;
	}

	ul {
		display: flex;
		flex-direction: column;
	}

	ul a {
		font-size: 18px;
		padding-bottom: 20px;
		text-decoration: none;
	}

	.download-ios {
		text-align: left;
		width: 90%;
		margin: 50px 0;
	}

	.download-ios h4 {
		font-size: 20px;
	}

	.download-ios-button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: black;
		color: white;
	}

	.download-ios-button:hover {
		background-color: white;
		color: black;
	}

	.subscribe-form {
		width: 90%;
		text-align: center;
	}

	.subscribe-form h4 {
		font-size: 20px;
	}

	.logo {
		width: 75%;
	}

	.copy-right {
		text-align: center;
	}

	@media screen and (min-width: 801px) {
		.instagram-images {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			-webkit-column-gap: 15 px;
			column-gap: 15 px;
		}

		.instagram-images div img {
			width: 90%;
			height: 90%;
			object-fit: cover;
		}

		.Footer2-info-container {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			align-items: flex-start;
			${"" /* gap: -20px; */}
		}

		.download-ios {
			width: 25%;
			margin-top: 0;
			position: relative;
			right: 20px;
		}

		.subscribe-form {
			width: 30%;
			text-align: left;
		}

		.info-links {
			padding-top: 33.25px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: space-between;
			height: 300px;
			width: 30%;
		}

		.info-link-one {
			width: 500px;
		}

		.info-link-two {
			width: 400px;
		}

		li {
			font-size: 15px;
		}

		.social-icons {
			text-align: justify;
		}

		.logo {
			display: none;
		}

		.download-ios h4 {
			font-size: 20px;
		}
		.subscribe-form h4 {
			font-size: 20px;
		}
	}

	@media screen and (max-width: 800px) {
		h4 {
			margin: 0 !important;
			font-size: 20px !important;
			margin-top: 10px !important;
		}

		.subscribe-form {
			text-align: left;
		}
	}
`;
