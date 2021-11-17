import css from "styled-jsx/css";

export default css`
	.tan-bg {
		background: #fff9ea;
		background: var(--tan-bg);
	}

	.eJtMwv {
		padding: 35 px;
		margin-bottom: -20 px;
		padding-left: 25px;
		padding-right: 25px;
		background-color: var(--tan-bg);
	}

	.eJtMwv div {
		${
			"" /* display: flex;
		justify-content: center; */
		}
	}

	.eJtMwv.sticky-cta {
		padding-bottom: 100 px;
	}

	.hAUZpT {
		margin-bottom: 35px;
	}

	.hAUZpT > div {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 5px;
	}

	.hAUZpT > div img {
		width: 100%;
	}

	.cqyslx {
		${"" /* box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3); */}
		background-color: var(--tan-bg);
		column-width: 900px;
		width: 350px;
		margin-right: 50px;
		${'' /* margin-left: 50px; */}
	}

	.cqyslx div {
		text-align: center;
	}

	.cqyslx div img {
		width: 80%;
		margin: 20px 0px;
	}

	.cqyslx input {
		padding-left: 15px;
		background: var(--white);
		border: none;
		font-family: "Merriweather Sans", sans-serif;
		font-weight: normal;
		font-style: normal;
	}

	.cqyslx form p {
		margin: 10px 0px;
	}

	.cbPXk {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;
		margin: 35px 0px;
	}

	.cbPXk img {
		max-width: 50px;
		margin: 0px auto;
	}

	.dCTSlY {
		margin: 50px 0px;
		height: 200px;
		width: auto;
		column-width: auto;
		position: relative;
		top: 300px;
		right: 50px;
	}

	.dCTSlY a {
		display: block;
		color: var(--black);
		text-decoration: none;
		padding: 10px 0px;
	}

	.esQcyV p {
		margin: 0px;
	}

	.download__IOS {
		border-radius: 15px;
		grid-column: 3;
		position: relative;
		right: 75px;
		grid-row: 2;
		justify-self: start;
		display: flex;
		background-color: var(--tan-bg);
		width: 320px;
		height: 250px;
		flex-direction: column;
		align-items: flex-start;
		padding: 25px;
		${"" /* box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3); */}
	}

	.download__IOS button {
		background-color: var(--black);
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.download__IOS button:hover {
		background-color: var(--white);
		color: var(--black);
	}

	@media screen and (min-width: 801px) {
		.eJtMwv.sticky-cta {
			padding-bottom: 80 px;
		}

		.eJtMwv > div {
			max-width: 1120px;
			margin: 0px auto;
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			column-gap: 120px;
		}

		.hAUZpT {
			grid-area: 1 / 1 / auto / 6;
			margin-bottom: 50px;
		}

		.hAUZpT p {
			text-align: center;
			font-size: 20px;
		}

		.hAUZpT > div {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			column-gap: 15px;
		}

		.hAUZpT > div img {
			width: 100%;
			height: 150px;
			object-fit: cover;
		}

		.cqyslx {
			grid-area: 2 / 1 / auto / 3;
		}

		.cqyslx div {
			text-align: left;
		}

		.cbPXk {
			grid-area: 3 / 1 / auto / 3;
		}

		.dCTSlY {
			margin: 20px 0px;
			grid-area: 2 / 3 / auto / 6;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}

		.esQcyV {
			grid-area: 3 / 3 / auto / 6;
			margin: 50px 0px;
		}
	}

	@media screen and (max-width: 800px) {
		.eJtMwv {
			height: 3600px;
		}

		.hAUZpT img {
			width: auto;
			height: 300px;
			object-fit: cover;
		}

		.download__IOS {
			margin: 0 auto 0 auto;
			position: relative;
			bottom: 400px;
			width: 80%;
			padding-bottom: 10px;
			zoom: 70%;
		}

		.hAUZpT {
			display: flex;
			flex-direction: column;
			align-items: center;
			${"" /* zoom: 150%; */}
		}

		.cqyslx {
			margin: 0 auto 0 auto;
			${"" /* zoom: 120%; */}
		}

		.cbPXk {
			text-align: center;
			${"" /* zoom: 120%; */}
		}

		.dCTSlY div a {
			${"" /* zoom: 150%; */}
		}

		.dCTSlY {
			top: 350px;
		}

		.esQcyV {
			text-align: center;
			position: relative;
			top: 420px;
		}
	}
`;
