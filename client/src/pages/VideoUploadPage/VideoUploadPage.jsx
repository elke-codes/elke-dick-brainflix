import React from "react";
import Button from "../../components/Button/Button";
import DividerLine from "../../components/DividerLine/DividerLine";

import "./VideoUploadPage.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import axios from "axios";

function handleCancel(e) {
	e.preventDefault();
	alert("Video upload being cancelled");
	e.target.reset();
}
function handleVideoSubmit(e) {
	e.preventDefault();

	const newVideo = {
		title: e.target.title.value,
		description: e.target.description.value
	};
	axios
		.post(`http://localhost:8080/videos`, newVideo)
		.then((response) => {
			console.log("response post video", response);
			e.target.reset();
			alert("your video is being uploaded");
			// props.history.push("/");
		})
		.catch((error) => console.log("error in post video", error));
}
const VideoUploadPage = (props) => {
	return (
		<>
			<DividerLine />
			<section className="upload">
				<h2 className="upload__title">Upload Video</h2>
				<DividerLine />
				<p className="section-title">video thumbnail</p>
				<div className="upload__wrapper">
					<img
						className="upload__image"
						src={thumbnail}
						alt="topview of someone riding a blue bikes closeup"
					/>
					<form
						// onSubmit={(e) => {
						// 	e.preventDefault();
						// 	alert(
						// 		"your video is being uploaded, we're dropping you off at home"
						// 	);
						// 	props.history.push("/");
						// }}
						onSubmit={handleVideoSubmit}
						className="upload__input">
						<label
							htmlFor="video-title"
							className="section-title upload__label-title">
							title your video
						</label>
						<input
							type="text"
							name="title"
							placeholder="Add a title to your video"
						/>
						<label
							htmlFor="video-description"
							className="section-title ">
							add a video description
						</label>
						<input
							type="text-area"
							name="description"
							placeholder="Add a description to your video"
							className="upload__description-input"
						/>
						<DividerLine />
						<div className="upload__buttons">
							<Button
								buttonText="upload"
								addedButtonClass="Button__upload"
								onSubmit={handleVideoSubmit}
							/>
							<Button
								buttonText="cancel"
								addedButtonClass="Button__cancel"
								onSubmit={handleCancel}
								// onSubmit={(e) => {
								// 	console.log("button clicked");
								// 	e.preventDefault();

								// 	alert(
								// 		"your video upload is being cancelled, we're bringing you back home"
								// 	);
								// 	props.history.push("/");
								// }}
							/>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

export default VideoUploadPage;
