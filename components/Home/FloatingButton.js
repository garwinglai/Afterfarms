import React, { useEffect, useState } from "react";
import floatingbuttoncss from "../../styles/styleJsx/home/floating-button-css";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

function FloatingButton() {
	const [isScroll, setIsScroll] = useState(false);
	const router = useRouter();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	function handleScroll() {
		if (window.scrollY > 100) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	}

	return (
		<React.Fragment>
			<div
				id="threeStepButtonBox"
				className={isScroll ? "sc-hMrMfs dxVTrf scroll" : "sc-hMrMfs dxVTrf"}
			>
				<button
					onClick={(e) => {
						e.preventDefault();
						setTimeout(() => {
							router.push("/");
						}, 100);
					}}
					id="threeStepGetStartedButton"
					// className="yellow-bg"
				>
					Join Waitlist
				</button>
			</div>
			<style jsx>{floatingbuttoncss}</style>
		</React.Fragment>
	);
}

export default FloatingButton;
