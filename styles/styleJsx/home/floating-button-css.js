import css from "styled-jsx/css";

export default css`
	.scroll {
		position: fixed;
		position: -webkit-fixed;
		background-color: var(--pale-yellow);
		bottom: 0px;
		width: 100%;
		padding: 5px 0;
		z-index: 1000;
		text-align: center;
		transition: all 200ms linear 0s;
	}

	.scroll button {
		width: 30%;
		height: 50px !important;
	}

	@media screen and (max-width: 800px) {
		.scroll button {
			width: 90%;
			${"" /* zoom: 160%; */}
		}
	}
`;
