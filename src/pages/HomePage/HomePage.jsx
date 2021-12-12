import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments";
import VideosNext from "../../components/VideosNext/VideosNext";
import Video from "../../components/Video/Video";

import React, { Component } from "react";
import axios from "axios";
import { API_KEY } from "../../utils/externalInfo";
import { API_URL } from "../../utils/externalInfo";

class HomePage extends Component {
    state = {
        videosData: [],
        selectedVideo: null
    };

    //get the video details from the api, then set the state of the selected video to be that video
    getVideoDetails(videoID) {
        axios
            .get(`${API_URL}videos/${videoID}?api_key=${API_KEY}`)
            .then((resolve) => {
                this.setState({
                    selectedVideo: resolve.data
                });
            })
            .then(() => {
                // after clicking a link in the videos next section, after having loaded the videodetails, scroll to the top of the page where this newly displayed video lives, so we don't have to scroll up every time
                // https://www.codegrepper.com/code-examples/javascript/onclick+scroll+to+top+javascript
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                });
            })
            .catch((error) => console.log(error));
    }

    componentDidMount() {
        const currentVideoId = this.props.match.videoID;
        console.log("this.props.match.videoID", this.props.match.videoID);

        // get the video data from the api
        axios
            .get(`${API_URL}videos?api_key=${API_KEY}`)
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
                console.log("currentVideoId", currentVideoId);
                //decide which video details to get from the api: if the currentVideoId is undefined(because it is the first one to be loaded on the page and props.match.videoID will thus be undifined) get the info for the onPageLoadVideo, otherwise use the currentVideoId (this.props.match.videoID) to get the data
                const videoToLoadId =
                    currentVideoId !== undefined
                        ? currentVideoId
                        : onPageLoadVideoId;
                //get the appropriate video details from the api
                this.getVideoDetails(videoToLoadId);
            })
            .catch((err) => console.log(err));
    }

    componentDidUpdate(prevProps) {
        console.log("this.componentDidUpdate.prevProps", prevProps);
        console.log(
            "componentDidUpdate this.props.match.params.videoID",
            this.props.match.params.videoID
        );
        const newVideoId = this.props.match.params.videoID;
        console.log("newVideoId", newVideoId);
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

                        <Hero selectedVideo={this.state.selectedVideo} />
                        <div className="main">
                            <Comments
                                selectedVideo={this.state.selectedVideo}
                            />
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
