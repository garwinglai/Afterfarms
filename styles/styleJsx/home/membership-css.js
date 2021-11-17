import css from "styled-jsx/css";

export default css`
	.emlStN {
		margin-top: -7px;
		padding: 40px 35px 50px;
		background-color: var(--green-bg);
	}

	.emlStN h2 {
		margin: 0px;
		font-size: 35px;
		padding: 50px 0px 20px;
	}

	/* grid container - images */
	.emlStN .grid-container {
		width: 112%;
		overflow: scroll hidden;
		position: relative;
		left: -40px;
		padding: 20px 0px 20px 40px;
	}

	.product-card {
		width: 150px;
	}

	.grid-2-max {
		display: flex;
		justify-content: center;
	}

	/* grid div */
	.NQDqT {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		column-gap: 5px;
	}

	/* image divs */
	.iWklMj {
		background: var(--white);
		border-radius: 4px;
		padding: 15px;
		box-shadow: rgba(195, 195, 195, 0.2) 5px 5px 5px;
		display: grid;
		grid-template-rows: 120px auto 32px;
		position: relative;
	}

	.iWklMj.with-brand {
		grid-template-rows: 120px auto auto 32px;
	}

	/* image */
	.iWklMj .product-image {
		width: 120px;
	}

	/* image h4 */
	.iWklMj h4,
	.iWklMj p {
		font-size: 12px;
		line-height: 22px;
		margin: 0px;
		background: var(--white);
		padding: 0px !important;
	}

	.ejDqyh b {
		font-weight: normal;
	}

	/* image p */

	.iWklMj .pct-off {
		margin-top: 10px;
	}

	.iWklMj .pct-off b {
		background-color: rgb(251, 240, 234);
		border-radius: 8px;
		padding: 5px 6px;
	}

	/* right image & description */
	.ejDqyh .desktop {
		display: none;
	}

	.emlStN h2 {
		margin: 0px;
		padding: 50px 0px 30px;
	}

	.emlStN .desk-small {
		display: none;
	}

	/* List */
	.dXDjoc {
		margin-bottom: 40px;
	}

	.dXDjoc li {
		list-style: none;
		display: block;
		margin-bottom: 15px;
	}

	.dXDjoc li::before {
		content: "";
		width: 20px;
		height: 20px;
		line-height: 20px;
		display: block;
		background: url("https://static.misfitsmarket.com/images/Green-check.svg")
			center center no-repeat;
		position: relative;
		left: -35px;
		top: 23px;
	}

	@media screen and (min-width: 900px) {
		.NQDqT {
			gap: 20 px;
			width: auto;
			margin: 0 px;
		}
	}

	@media screen and (min-width: 801px) {
		.emlStN .mobile-small {
			display: none;
		}

		/* grid 2 max */
		.emlStN > div {
			-webkit-box-align: center;
			align-items: center;
		}

		.ejDqyh .grid-2-max {
			max-width: 1200px;
			margin: 0px auto;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 40px;
		}

		/* Left grid-container images */
		.emlStN .grid-container {
			width: auto;
			overflow: initial;
			position: static;
			padding: 40px;
		}

		/* grid div */
		.NQDqT {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(7, 1fr);
			row-gap: 5px;
		}

		/* image divs */
		.NQDqT #productCard1 {
			grid-row: 1 / 4;
			align-self: flex-end;
		}

		.NQDqT #productCard2 {
			grid-row: 4 / 7;
			align-self: flex-start;
		}

		.NQDqT #productCard3 {
			grid-row: 2 / 5;
			align-self: flex-end;
		}

		.NQDqT #productCard4 {
			grid-row: 5 / 8;
			align-self: flex-start;
		}

		.NQDqT #productCard5 {
			display: block;
			grid-row: 1 / 4;
			align-self: flex-end;
		}

		.NQDqT #productCard6 {
			display: block;
			grid-row: 4 / 7;
			align-self: flex-start;
		}

		/* right image & description */

		.ejDqyh .desktop {
			display: block;
		}

		.ejDqyh h2.desk-small {
			font-size: 36px;
			line-height: 46px;
		}

		.emlStN .desk-small {
			display: block;
		}

		.emlStN > div h2 {
			padding: 0px 0px 40px;
		}

		.dXDjoc li {
			margin-bottom: 0px;
		}
	}

	@media screen and (max-width: 1024px) {
		.emlStN {
			${"" /* zoom: 110%; */}
		}
	}

	@media screen and (max-width: 800px) {
		.grid-2-max {
			flex-direction: column;
		}

		.emlStN {
			zoom: 105%;
		}

		.product-card {
			width: 200px;
			height: 250px;
			display: grid;
			grid-template-rows: 150px auto 35px;
		}

		.product-card img {
			width: 150px !important;
			height: 150px !important;
		}
	}
`;
