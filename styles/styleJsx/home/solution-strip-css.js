import css from "styled-jsx/css";

export default css`
	.euzeWQ {
		background: var(--avocado-yellow);
		padding-bottom: 100px !important;
	}

	.ejDqyh .divider-blob {
		width: 100vw;
	}

	.euzeWQ h2 {
		margin-bottom: 20px;
		padding-bottom: 30px;
		position: relative;
	}

	.euzeWQ h2 .highlight.highlight-top {
		width: 282px;
	}

	.euzeWQ h2 .highlight.highlight-bottom {
		width: 128px;
	}

	.euzeWQ h2 span {
		position: absolute;
		z-index: 10;
	}

	.ejDqyh b {
		font-weight: normal;
	}

	.euzeWQ .grid-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.euzeWQ .grid-container div {
		width: 50%;
		margin-right: 20px;
	}

	.euzeWQ .grid-container img {
		width: 400px;
		height: auto;
		object-fit: cover;
		${'' /* border-radius: 15px; */}
		${'' /* box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22); */}
	}

	@media screen and (min-width: 801px) {
		.euzeWQ {
			position: relative;
			padding-bottom: 30px;
			margin-top: 16px;
		}

		.euzeWQ .divider-blob4 {
			margin-top: -50px;
		}

		.ejDqyh h2.desk-med {
			font-size: 42px;
			line-height: 52px;
		}

		.ejDqyh p.desk-med {
			font-size: 20px;
			line-height: 30px;
		}
	}

	@media screen and (max-width: 1024px) {
		.grid-2-max {
			${'' /* zoom: 120%; */}
		}
	}

	@media screen and (max-width: 800px) {
		.grid-2-max {
			${'' /* zoom: 150%; */}
		}

		.euzeWQ .grid-container {
			width: 100%;
			display: flex;
			flex-direction: column;
		}

		.euzeWQ .grid-container div {
			width: 90%;

			margin: 0 10px 0 10px;
		}

		.euzeWQ .grid-container div h2 {
			margin-bottom: 0;
			padding-bottom: 30px;
			font-size: 35px;
		}

		.euzeWQ .grid-container div p {
			margin-bottom: 30px;
			zoom: 110%;
		}
	}
`;
