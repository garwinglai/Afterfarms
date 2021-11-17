import css from "styled-jsx/css";

export default css`
	.InfoHeader {
		padding: 100px 25px 40px;
		text-align: center;
		background-color: var(--avocado-yellow);
	}

	.divider {
		border-style: dotted none none none;
		border: 3px var(--avocado-green) solid;
		width: 50%;
		margin: 30px auto 50px;
	}

	@media screen and (min-width: 801px) {
		.InfoHeader > h1,p {
			width: 50%;
			margin: auto;
		}
	}
`;
