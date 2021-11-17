import css from "styled-jsx/css";

export default css`
	.Banner2 {
		display: flex;
		flex-direction: column-reverse;
		background-color: var(--brown-bg);
	}

  .Banner2__Left h1 {
    font-size: 31px;
  }

	.Banner2 img {
		width: 100%;
		object-fit: cover;
		padding-top: 50px;
	}

	.Banner2__Left {
		padding: 0 25px 50px;
	}

	.Banner2__Left p {
		padding: 20px 0;
	}

	@media screen and (min-width: 801px) {
		.Banner2 {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-content: center;
			padding: 20px 50px 0;
		}

    .Banner2 h1 {
      font-size: 45px;
    }

		.Banner2 img {
			${
				"" /* position: relative;
      bottom: 50px; */
			}
			width: 100%;
			align-item: flex-start;
		}

		.Banner2__Left {
			width: 90%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-bottom: 0;
		}

		.Banner2__Right {
			width: 100%;
      padding-bottom: 50px;
		}

		.Banner2 p {
			width: 90%;
		}

		.Banner2 button {
			width: 85%;
		}
	}
`;
