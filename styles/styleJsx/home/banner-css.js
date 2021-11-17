import css from "styled-jsx/css";

export default css`
	.cwWcdd {
		background-color: var(--brown-bg);
		padding: 40px 10px 0px;
	}

	.cwWcdd img {
		width: 100%;
	}

	.kyNtJm {
		padding: 0px 35px 35px;
		background-color: var(--brown-bg);
		
	}

	.kyNtJm h1,
	.kyNtJm p,
	.kyNtJm button {
		margin-top: 0px;
		margin-bottom: 35px;
	}

	.ejDqyh b {
		font-weight: normal;
	}

	.kyNtJm .grid-2-max {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.kyNtJm .grid-2-max .right-container {
		padding: 30px 50px;
		display: flex;
		height: 700px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.kyNtJm .grid-2-max .right-container h3 {
		align-self: flex-start;
	}

	.kyNtJm img {
		width: 40%;
		height: 700px;
		object-fit: cover;
		${
			"" /* border-radius: 15px;
		box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
			0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
			0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075); */
		}
	}

	.card__container {
		background-color: var(--brown-bg);
		width: 400px;
		height: auto;
		display: flex;
		margin-bottom: 20px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		${"" /* border-radius: 15px; */}
		${
			"" /* box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
			0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
			0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075); */
		}
		${
			"" /* box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); */
		}
	}

	.form__container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.form__container form {
		width: 90%;
		height: 100%;
	}

	.form__container form button {
		width: 100%;
	}

	.form__container input {
		background-color: var(--gray-bg);
		height: 40px;
	}

	.download__IOS {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		border-radius: 15px;
	}

	.download__IOS div {
		width: 90%;
		margin-bottom: 0;
		padding-bottom: 20px;
		padding-top: 20px;
	}

	.download__IOS button {
		background-color: var(--black);
		color: white;
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.download__IOS button:hover {
		background-color: var(--white);
		color: var(--black);
	}

	input {
		height: 50px;
	}

	button {
		height: 45px !important;
	}

	.divider {
		display: flex;
		justify-content: center;
		align-items: center;
		${"" /* width: 390px; */}
		${"" /* height: 30px; */}
		padding: 0;
		margin: 0;
	}

	.divider h3 {
		margin: 0;
	}

	.PopUp {
		height: 750px;
		width: 90%;
		text-align: center;
		z-index: 1000;
		position: absolute;
		right: 5%;
		top: 575px;
		background-color: var(--green-bg);
		box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
	}

	.PopUp img {
		padding-top: 50px;
		margin: auto;
		display: block;
	}

	.PopUp p {
		padding: 10px 25px;
	}

	.PopUp button {
		width: 90%;
		margin: auto;
		display: block;
		position: relative;
		top: 25px;
	}

	.PopUp .title__x {
		position: absolute;
		right: 20px;
		top: 5px;
	}

	/* --------------------------------- Start Media Screens --------------------------------- */

	@media screen and (min-width: 801px) {
		.cwWcdd {
			display: none;
		}

		.ejDqyh .mobile {
			display: none;
		}

		.kyNtJm {
			background-repeat: no-repeat;
			background-position: right 80%;
			${"" /* background-size: 56%; */}
			${"" /* padding: 35 px; */}
			zoom: 90%;
		}

		.kyNtJm > div {
			padding-top: 40px;
		}

		.kyNtJm > div > div {
			${"" /* padding: 40 px; */}
		}

		.kyNtJm h1 {
			font-size: 60px;
			line-height: 70px;
		}

		.ejDqyh p.desk-med {
			font-size: 20px;
			line-height: 30px;
		}

		.ejDqyh button {
			width: 100%;
			height: 60 px !important;
			font-size: 20px !important;
		}

		.PopUp {
			position: absolute;
			background-color: var(--green-bg);
			width: 80%;
			text-align: center;
			right: 8%;
			top: 120px;
			height: 600px;
			padding: 70px 25px 0;
			box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
				0 15px 12px rgba(0, 0, 0, 0.22);
			box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
				0 15px 12px rgba(0, 0, 0, 0.22);
			box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
				0 15px 12px rgba(0, 0, 0, 0.22);
			box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
				0 15px 12px rgba(0, 0, 0, 0.22);
		}

		.PopUp .title__x {
			position: absolute;
			right: 30px;
			top: 5px;
		}

		.PopUp .title__x:hover {
			cursor: pointer;
		}
	}

	@media screen and (max-width: 800px) {

		.kyNtJm img {
			visibility: hidden;
			display: none;
		}

		.kyNtJm .right-container h1 {
			padding-bottom: 20px;
		}
		.kyNtJm .right-container h3 {
			padding-bottom: 20px;
		}

		.cwWcdd {
			padding: 0;
		}

		.cwWcdd img {
			height: 400px;
			object-fit: cover;
			width: 100%;
			${"" /* padding-top: 50px; */}
			${"" /* border-radius: 15px; */}
			box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
				0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
				0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
		}

		.kyNtJm .grid-2-max .right-container {
			display: flex !important;
			align-items: center;
			margin-top: 10px;
			padding: 0;
		}

		.right-container h3 {
			align-self: flex-start;
		}

		.card__container {
			width: 100%;
		}

		.form__container {
			width: 100%;
		}

		.form__container form {
			margin-bottom: 0;
			padding-bottom: 0;
		}

		.divider {
			display: flex;
			align-items: center;
			width: 100%;
			height: 40px;
			margin-top: 5px;
		}

		.divider h3 {
			display: flex;
			align-items: center;
			margin: 0;
			height: 40px;
		}
	}
`;
