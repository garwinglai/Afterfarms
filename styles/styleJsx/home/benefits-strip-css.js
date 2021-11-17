import css from "styled-jsx/css";

export default css`
	/* ~~~~~~~~~~~~~ Divider Image ~~~~~~~~~~~~~ */
	.hJWbPy {
		background-color: var(--white);
	}

	/* ~~~~~~~~~~~~~ Divider Image mobile / Desktop~~~~~~~~~~~~~ */

	.ejDqyh .divider-blob {
		width: 100vw;
	}

	.hJWbPy .divider-blob1 {
		background: var(--brown-bg);
	}

	.ejDqyh .desktop {
		display: none;
	}

	.hJWbPy > div {
		position: relative;
		top: -10px;
	}
	.hJWbPy > div .grid-container {
		background: var(--white);
		padding: 50px 35px 0px;
	}
	.hJWbPy .home2-section {
		padding-bottom: 20px;
		display: flex;
		align-items: flex-start;
	}

	.hJWbPy .home2-section img {
		padding-right: 20px;
	}

	.hJWbPy .home2-section div h3 {
		margin: 0px 20px 0px 0px;
	}

	.ejDqyh b {
		font-weight: normal;
	}
	@media screen and (min-width: 801px) {
		.ejDqyh .mobile {
			display: none;
		}
		.hJWbPy .divider-blob1 {
			margin-bottom: -4 px;
		}

		.ejDqyh .desktop {
			display: block;
		}

		.hJWbPy > div {
			padding: 20 px 35 px 0 px;
			background: var(--white);
			top: 0 px;
		}
		.hJWbPy > div .grid-container {
			display: grid;
			grid-template-columns: 1fr 3px 1fr 3px 1fr;
			column-gap: 40px;
			max-width: 1200px;
			margin: 0px auto;
			padding: 30px 40px;
		}
		.hJWbPy > div .grid-container .home2-section {
			padding: 10px;
		}
		.hJWbPy > div .grid-container .line {
			background: rgb(45, 45, 45);
			height: 120px;
			align-self: center;
			border-radius: 10px;
		}
	}

	@media screen and (max-width: 800px) {
		.hJWbPy {
			${'' /* zoom: 130%; */}
		}

		.icons {
			padding-top: 30px;
		}
	}
`;
