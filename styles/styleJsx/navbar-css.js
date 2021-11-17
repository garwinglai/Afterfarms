import css from "styled-jsx/css";

export default css`
	/* Div Root Css */

	/* ------------------------ #Navbar ------------------------ */

	.bZyXsc {
		display: block;
		padding-top: 10px 0 10px 0;
		position: fixed;
		height: 80px;
		width: 100%;
		z-index: 1000;
		transition: top 0.3s ease 0s;
		background: var(--white);
		box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px;
	}

	.nav-menu {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.bZyXsc .nav-menu .navbar__desktop {
		display: flex;
		width: 100%;
		justify-content: space-between;
		margin: 0 25px 0 25px;
		align-items: center;
	}

	.left-items {
		display: flex;
		align-items: center;
		width: 70%;
		justify-content: flex-end;
		padding-right: 50px;
	}

	.sign-in {
		margin-left: 5px;
		padding-right: 40px;
		width: 100%;
	}

	.bZyXsc.homepage {
		background-color: var(--green-bg);
		box-shadow: none;
	}

	.bZyXsc .nav-menu .navbar__desktop .fDProa a {
		cursor: pointer;
	}

	.bZyXsc .nav-menu .navbar__desktop .fDProa a:hover {
		background-color: transparent;
		color: var(--green-bg);
	}

	.bZyXsc .nav-menu .navbar__desktop .fDProa a div {
		display: flex;
		align-items: center;
		color: var(--black);
	}

	.bZyXsc .nav-menu .navbar__desktop #signIn {
		display: flex;
		align-items: center;
		text-decoration: none;
	}
	.bZyXsc .nav-menu .navbar__desktop #signIn:hover {
		background-color: transparent;
		color: var(--green-bg);
		cursor: pointer;
	}

	.bZyXsc .nav-menu .navbar__desktop #signIn b {
		color: black;
	}

	.bZyXsc.nav-down {
		top: 0px;
	}

	.bZyXsc.scroll {
		box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
			0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
			0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
	}

	.kujEhO {
		${"" /* margin-left: 25px; */}
		grid-column: 2 / 4;
		justify-self: center;
	}

	.fDProa a,
	.fDProa p {
		color: var(--black);
		text-decoration: none;
	}

	.evXnQF {
		position: relative;
		display: inline-block;
		visibility: visible;
		top: 60 px;
		right: 285 px;
		text-align: left;
	}

	.fDProa > div {
		visibility: hidden;
		transition: all 0.1s ease 0.2s;
	}

	.evXnQF div {
		background: var(--white);
		position: absolute;
		width: 220 px;
		padding: 20 px 35 px;
		box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px;
	}

	.evXnQF div::before {
		content: "";
		position: relative;
		top: -40 px;
		display: inline-block;
		float: right;
		width: 0 px;
		height: 0 px;
		border-width: 10 px;
		border-style: solid;
		border-color: transparent transparent var(--white) transparent;
	}

	.evXnQF div a {
		display: block;
		color: var(--black);
		text-decoration: none;
		padding: 20 px 0 px;
	}

	.evXnQF div a b {
		top: 0px;
		padding: 0px;
	}

	.dvMPLK {
		height: 68 px;
		display: block;
		transition: all 20ms linear 0s;
	}

	.yellow-bg {
		height: 45px;
		width: 140%;
		padding-left: 15px;
		padding-right: 15px;
	}

	.kujEhO {
		grid-column: 2 / 4;
		justify-self: center;
	}

	.dHqkDw {
		justify-self: flex-end;
	}

	.menu {
		background-color: white;
		position: absolute;
		width: 20em;
		left: 45%;
		box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
			0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
			0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
	}

	.arrow-up {
		width: 0;
		height: 0;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		border-bottom: 20px solid white;
		z-index: 10;
		position: relative;
		left: 55%;
	}

	.menu {
		display: flex;
		flex-direction: column;
	}

	.menu a {
		font-size: 20px;
		color: var(--black);
		font-weight: 800;
		padding: 1.5em 0 1.5em 1.5em;
		margin: 0;
		text-decoration: none;
	}

	.menu a:hover {
		cursor: pointer;
		color: var(--ivy);
		background-color: var(--light-brown-bg);
	}

	.signInMenu {
		position: absolute;
		top: 70px;
		padding-top: 25px;
		right: 150px;
		width: 25%;
		height: 50px;
		text-align: center;
		margin: auto;
		background-color: var(--avocado-yellow);
		z-index: 1000;
		border-radius: 5px;
		box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
	}

	.arrow-up-2 {
		width: 0;
		height: 0;
		border-left: 15px solid transparent;
		border-right: 15px solid transparent;
		border-bottom: 15px solid var(--avocado-yellow);
		z-index: 2000;
		position: absolute;
		right: 200px;
		top: 55px;
	}

	.GetStarted__Button {
		width: 80%;
	}

	@media screen and (min-width: 801px) {
		.nav-menu {
			padding-top: 10px;
		}
		.bZyXsc .nav-menu .navbar__mobile {
			display: none !important;
		}

		.bZyXsc .nav-menu .navbar__desktop {
			width: 100%;
		}

		.divider {
			padding: 0 40px;
		}

		
	}

	@media screen and (max-width: 800px) {
		.menu a:active {
			color: var(--ivy);
			background-color: var(--light-brown-bg);
		}

		.menu__links:active {
			color: var(--ivy);
			background-color: var(--light-brown-bg);
		}

		.navbar__mobile {
			${"" /* zoom: 130%; */}
		}

		.scroll {
			visibility: hidden;
		}

		.dHqkDw {
			${"" /* zoom: 130%; */}
		}

		.bZyXsc .nav-menu {
			display: flex;
		}

		.navbar__desktop {
			display: none !important;
		}

		.bZyXsc .nav-menu .navbar__mobile {
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			width: 100%;
			height: 80px;
		}

		.menu {
			left: 0;
		}

		.arrow-up {
			left: 5%;
		}

		.signInMenu {
			position: absolute;
			top: 75px;
			padding-top: 25px;
			right: 25px;
			width: 55%;
			height: 50px;
			text-align: center;
			margin: auto;
			background-color: var(--yellow-border);
			z-index: 1000;
			border-radius: 5px;
			box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
		}

		.arrow-up-2 {
			width: 0;
			height: 0;
			border-left: 15px solid transparent;
			border-right: 15px solid transparent;
			border-bottom: 15px solid var(--yellow-border);
			z-index: 1001;
			position: absolute;
			right: 40px;
			top: 60px;
		}
	}
`;
