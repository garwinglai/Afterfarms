import React, { useState } from "react";
import InfoHeader from "../../components/InfoHeader";
import Layout from "../../components/Layout";
import styles from "../../styles/css/faqs.module.css";
import FloatingButton from "../../components/Home/FloatingButton";

function Faqs() {
	const [onShow, setOnShow] = useState({
		faqOne: false,
		faqTwo: false,
		faqThree: false,
		faqFour: false,
	});

	const { faqOne, faqTwo, faqThree, faqFour } = onShow;

	const pageHeader = {
		title: "FAQs",
		headerDescription:
			"If you don't find your question here, please contact us through our contact page.",
	};

	function handleClick(e) {
		e.preventDefault();
		const { name } = e.target;

		switch (name) {
			case "buttonOne":
				setOnShow({ ...onShow, faqOne: !faqOne });
				break;
			case "buttonTwo":
				setOnShow({ ...onShow, faqTwo: !faqTwo });
				break;
			case "buttonThree":
				setOnShow({ ...onShow, faqThree: !faqThree });
				break;
			case "buttonFour":
				setOnShow({ ...onShow, faqFour: !faqFour });
				break;

			default:
				break;
		}
	}

	const panelStyle = () => {};

	return (
		<Layout>
			<InfoHeader pageHeader={pageHeader} />
			<div className={styles.faqs}>
				{
					// * FAQ QUESTION ONE
				}
				<button
					name="buttonOne"
					onClick={handleClick}
					className={`${styles.accordion}`}
					style={
						faqOne
							? {
									backgroundColor: "var(--avocado-brown-dark)",
									color: "var(--avocado-yellow)",
							  }
							: {
									backgroundColor: "var(--avocado-yellow)",
									color: "var(--black)",
							  }
					}
				>
					{faqOne ? "-" : "+"} What does my free account include?
				</button>
				<div
					className={styles.panel}
					style={faqOne ? { display: "block" } : { display: "none" }}
				>
					<p>
						Your account includes access to our discounted produce.
						Additionally, it includes access to our rewards and discounts. We
						occasionally will throw in a few VIP surprises as well!
					</p>
				</div>
				{/* // * FAQ QUESTION TWO */}
				<button
					name="buttonTwo"
					onClick={handleClick}
					className={styles.accordion}
					style={
						faqTwo
							? {
									backgroundColor: "var(--avocado-brown-dark)",
									color: "var(--avocado-yellow)",
							  }
							: {
									backgroundColor: "var(--avocado-yellow)",
									color: "var(--black)",
							  }
					}
				>
					{faqTwo ? "-" : "+"} Is your produce organic?
				</button>
				<div
					className={styles.panel}
					style={faqTwo ? { display: "block" } : { display: "none" }}
				>
					<p>
						We source both organic and non-organic produce. Our goal is to
						rescue as much produce as possible. Our organic produce will be
						listed with an oganic tag in the shop center
					</p>
				</div>
				{/* // * FAQ QUESTION THREE */}
				<button
					name="buttonThree"
					onClick={handleClick}
					className={styles.accordion}
					style={
						faqThree
							? {
									backgroundColor: "var(--avocado-brown-dark)",
									color: "var(--avocado-yellow)",
							  }
							: {
									backgroundColor: "var(--avocado-yellow)",
									color: "var(--black)",
							  }
					}
				>
					{faqThree ? "-" : "+"} Do I need an account to view your produce?
				</button>
				<div
					className={styles.panel}
					style={faqThree ? { display: "block" } : { display: "none" }}
				>
					<p>
						Yes. Our produce is only available to members. However, it&apos;s
						free to sign up for a membership!
					</p>
				</div>

				{/* // * FAQ QUESTION FOUR */}
				<button
					name="buttonFour"
					onClick={handleClick}
					className={styles.accordion}
					style={
						faqFour
							? {
									backgroundColor: "var(--avocado-brown-dark)",
									color: "var(--avocado-yellow)",
							  }
							: {
									backgroundColor: "var(--avocado-yellow)",
									color: "var(--black)",
							  }
					}
				>
					{faqThree ? "-" : "+"} When do I get my produce?
				</button>
				<div
					className={styles.panel}
					style={faqFour ? { display: "block" } : { display: "none" }}
				>
					<p>We ship our produce every Monday.</p>
				</div>
			</div>
			<FloatingButton />
		</Layout>
	);
}

export default Faqs;
