import css from "styled-jsx/css";

export default css`
	/* ~~~~~~~~~~~~~ animation ~~~~~~~~~~~~~ */
	.jGZZfg {
		border-bottom: 28px solid rgb(222, 164, 85);
		border-top: 28px solid rgb(222, 164, 85);
		background-color: rgb(222, 164, 85);
		overflow: hidden;
		white-space: nowrap;
	}

	.jGZZfg > div {
		animation: 25s linear 0s infinite normal none running marquee;
		display: inline-block;
		padding-right: 10px;
	}

	.jGZZfg > div span {
		font-size: 20px;
		font-weight: bold;
		color: rgb(45, 45, 45);
		font-family: "Merriweather Sans", sans-serif;
		padding: 0px 10px;
	}

	@media screen and (min-width: 801px) {
		.jGZZfg > div {
			animation: 40s linear 0s infinite normal none running marquee;
		}
		.jGZZfg > div span {
			font-size: 24px;
		}
	}
`;
