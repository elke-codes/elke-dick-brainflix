import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments";
import VideosNext from "../../components/VideosNext/VideosNext";
import Video from "../../components/Video/Video";

import React, { Component } from "react";
import axios from "axios";

class HomePage extends Component {
	state = {
		videosData: [],
		selectedVideo: null
	};

	// axiosService = axios.create({ baseURL: "localhost:8080" });

	//get details for the current video and url
	getVideoDetails = (videoID) => {
		axios
			.get(`http://localhost:8080/videos/${videoID}`)
			.then((resolve) => {
				this.setState({
					selectedVideo: resolve.data
				});
			})
			.catch((error) => console.log("get video details", error));
	};
	//post comment
	handleComment = (name, comment, videoID) => {
		const newComment = {
			name,
			comment
		};
		axios
			.post(
				`http://localhost:8080/videos/${videoID}/comments`,
				newComment
			)
			.then(() => {
				this.getVideoDetails(videoID);
			})
			.catch((error) => console.log("post comment", error));
	};
	//delete a comment
	handleDelete = (commentID, videoID) => {
		axios
			.delete(
				`http://localhost:8080/videos/${videoID}/comments/${commentID}`
			)
			.then(() => {
				this.getVideoDetails(videoID);
			})
			.catch((error) => console.log("delete comment", error));
	};
	//add a like to a video
	handleLike = (videoID) => {
		axios
			.put(`http://localhost:8080/videos/${videoID}/likes`)
			.then(() => {
				this.getVideoDetails(videoID);
			})
			.catch((error) => console.log("put likes error", error));
	};

	//when the page first loads, get the video details from the api, then set the state of the selected video to be that video
	componentDidMount() {
		const currentVideoId = this.props.match.videoID;

		// get the video data from the api
		axios
			.get(`http://localhost:8080/videos`)
			.then((result) => {
				const videosData = result.data;
				//populate our videoData array with info from the api
				this.setState({
					videosData: videosData
				});
				//set the video to be loaded when the page fist loads to be the fist one in the array of videos retrieved from the api
				return videosData[0].id;
			})
			.then((onPageLoadVideoId) => {
				//decide which video details to get from the api: if the currentVideoId is undefined(because it is the first one to be loaded on the page and props.match.videoID will thus be undifined) get the info for the onPageLoadVideo, otherwise use the currentVideoId (this.props.match.videoID) to get the data
				const videoToLoadId =
					currentVideoId !== undefined
						? currentVideoId
						: onPageLoadVideoId;
				//get the appropriate video details from the api
				this.getVideoDetails(videoToLoadId);
			})
			.catch((err) => console.log("get video data", err));
	}

	componentDidUpdate(prevProps) {
		const newVideoId = this.props.match.params.videoID;

		//check if the previous videoid is the same as our newly clicked video id (we don t want to keep fetching data for the same video, and trigger re renders which will get us in an infinite loop), then if the new video id is not undefined (when the page first renders, this.props.match.params.videoID will be undefined), set the params to the new id, otherwise, it will the first one to load, which we decided will be the first one in the array
		if (prevProps.match.params.videoID !== newVideoId) {
			const videoToLoadId =
				newVideoId !== undefined
					? newVideoId
					: this.state.videosData[0].id;

			this.getVideoDetails(videoToLoadId);
		}
	}

	render() {
		return (
			<>
				{this.state.selectedVideo ? (
					<>
						<Video selectedVideo={this.state.selectedVideo} />
						<div className="main">
							<div className="main__container">
								<Hero
									selectedVideo={this.state.selectedVideo}
									onLike={this.handleLike}
								/>

								<Comments
									onComment={this.handleComment}
									selectedVideo={this.state.selectedVideo}
									onDelete={this.handleDelete}
								/>
							</div>
							<VideosNext
								// get all but the currently selected video to be rendered in the nextvideos section
								allButselectedVideo={this.state.videosData.filter(
									(video) =>
										video.id !== this.state.selectedVideo.id
								)}
								videosData={this.state.videosData}
							/>
						</div>
					</>
				) : (
					<p>Page loading....</p>
				)}
			</>
		);
	}
}

export default HomePage;
