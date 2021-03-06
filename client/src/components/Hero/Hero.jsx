/// --- HERO JSX --- ///
// -- IMPORT MODULES -- //
import React from "react";

// -- IMPORT COMPONENTS -- //
import VideoDetails from "../VideoDetails/VideoDetails";
import DividerLine from "./../DividerLine/DividerLine";
// -- IMPORT SCSS -- //
import "./Hero.scss";

// -- COMPONENT DECLARATION -- //

const Hero = (props) => {
	const { title } = props.selectedVideo;

	return (
		<section className="Hero">
			<article className="Hero__video-details">
				<h2 className="Hero__title">{title}</h2>
				<DividerLine addedDividerClass="Divider__hero" />
				<VideoDetails
					selectedVideo={props.selectedVideo}
					onLike={props.onLike}
				/>
			</article>
		</section>
	);
};

export default Hero;
