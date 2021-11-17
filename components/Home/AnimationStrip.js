import React from "react";
import animationstripcss from "../../styles/styleJsx/home/animation-strip-css";

function AnimationStrip() {
	return (
		<React.Fragment>
			<div className="sc-iCwjlJ jGZZfg">
				<div>
					<span>Avocadoes &amp; Bananas</span>
					<span>·</span>
					<span>Lettuce &amp; Napa</span>
					<span>·</span>
					<span>Apples &amp; Oranges</span>
					<span>·</span>
					<span>Tomatoes &amp; Potatoes</span>
					<span>·</span>
					<span>Carrots &amp; Bell Peppers</span>
					<span>·</span>
					<span>Cabbage &amp; Broccoli</span>
					<span>·</span>
					<span>Onions &amp; Garlic</span>
					<span>·</span>
				</div>
			</div>
			<style jsx>{animationstripcss}</style>
		</React.Fragment>
	);
}

export default AnimationStrip;
