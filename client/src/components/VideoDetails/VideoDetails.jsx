/// --- VIDEODETAILS JSX --- ///
import React from "react";

//-- IMPORT COMPONENTS -- //
import DividerLine from "../DividerLine/DividerLine";

// -- IMPORT HELPER FUNCTION --//
import { timeAgo } from "../../utils/timeAgo";

const VideoDetails = (props) => {
	const { channel, timestamp, views, likes, description } =
		props.selectedVideo;

	const videoID = props.selectedVideo.id;
	const handleClick = (videoID) => {
		props.onLike(videoID);
	};
	return (
		<>
			<div className="Hero__info-container">
				<div className="Hero__info-left">
					<p className="Hero__channel">By {channel}</p>
					<p className="Hero__date">{timeAgo(timestamp)}</p>
				</div>
				<div className="Hero__info-right">
					<p className="Hero__views">{views}</p>
					<p
						className="Hero__likes"
						onClick={() => handleClick(videoID)}>
						{likes}
					</p>
				</div>
			</div>
			<DividerLine addedDividerClass="Divider__hero-bottom" />
			<p className="Hero__description">{description}</p>
		</>
	);
};

export default VideoDetails;
