import css from "styled-jsx/css";

export default css`
	.ibYXGK {
		padding: 35px 35px 105px;
		background: var(--brown-bg);
		position: relative;
		top: -7px;
	}

	.bLpfyh {
		width: 112%;
		overflow: scroll hidden;
		position: relative;
		left: -35px;
		padding-left: 35px;
		margin-top: 35px;
		margin-bottom: 35px;
	}

	.gZSoQN {
		width: 860px;
	}

	.gZSoQN a {
		width: 265px;
		display: inline-block;
		margin-right: 15px;
		vertical-align: top;
		text-decoration: none;
	}

	.gZSoQN img {
		width: 265px;
	}

	.ejDqyh .desktop {
		display: none;
	}

	.gZSoQN img:last-of-type {
		padding-right: 0px;
	}

	.gZSoQN p {
		margin: 10px 0px;
	}

	.ejDqyh b {
		font-weight: normal;
	}

	@media screen and (min-width: 801px) {
		.ibYXGK {
			padding: 70px 35px 120px;
		}

		.ibYXGK > div {
			max-width: 1200px;
			margin: 0px auto;
			text-align: center;
		}

		.ejDqyh h2.desk-med {
			font-size: 42px;
			line-height: 52px;
		}

		.ejDqyh p.desk-med {
			font-size: 20px;
			line-height: 30px;
		}

		.bLpfyh {
			width: 100%;
			left: 0px;
			padding-left: 0px;
			overflow-x: hidden;
		}

		.gZSoQN {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			column-gap: 40px;
		}

		.gZSoQN a {
			width: 100%;
			margin-right: 0px;
		}

		.gZSoQN img {
			width: 100%;
		}

		.ejDqyh .mobile {
			display: none;
		}

		.ejDqyh .desktop {
			display: block;
		}

		.gZSoQN p {
			text-align: left;
		}

		.ejDqyh button {
			/* max-width: 260px; */
			height: 60px !important;
			font-size: 20px !important;
		}
	}

	@media screen and (max-width: 800px) {
		.ibYXGK {
			${'' /* zoom: 150%; */}
		}
	}
`;
