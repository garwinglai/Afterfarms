import Document, { Html, Main, Head, NextScript } from "next/document";
// import { Head } from "next/document"

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;700&family=Mochiy+Pop+P+One&display=swap"
						rel="stylesheet"
					/>

					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
						integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
						crossOrigin="anonymous"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
