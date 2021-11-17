import React from "react";
import infoheadercss from "../styles/styleJsx/info-header-css";

function InfoHeader({ pageHeader }) {
	const { title, headerDescription, imgLinks, slug } = pageHeader;
	return (
		<React.Fragment>
			<div className="InfoHeader">
				<h1 className="title-large" style={{ fontSize: "45px" }}>
					{title}
				</h1>
				<div className="divider"></div>
				<p className="body-large" style={{ fontSize: "18px" }}>
					{headerDescription}
				</p>
			</div>
			<style jsx>{infoheadercss}</style>
		</React.Fragment>
	);
}

export default InfoHeader;
