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

    getVideoDetails(videoID) {
        axios
            .get(`${API_URL}videos/${videoID}?api_key=${API_KEY}`)
            .then((resolve) => {
                this.setState({
                    selectedVideo: resolve.data
                });
            });
    }

    componentDidMount() {
        const currentVideoId = this.props.match.videoID;

        axios
            .get(`${API_URL}videos?api_key=${API_KEY}`)
            .then((result) => {
                const videosData = result.data;

                this.setState({
                    videosData: videosData
                });

                return videosData[0].id;
            })
            .then((onLoadVideoId) => {
                const videoToLoadId =
                    currentVideoId !== undefined
                        ? currentVideoId
                        : onLoadVideoId;

                this.getVideoDetails(videoToLoadId);
            })
            .catch((err) => console.log(err));
    }

    componentDidUpdate(prevProps) {
        const newVideoId = this.props.match.params.videoID;

        if (prevProps.match.params.videoID !== newVideoId) {
            const movieToLoadId =
                newVideoId !== undefined
                    ? newVideoId
                    : this.state.videosData[0].id;

            this.getVideoDetails(movieToLoadId);
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
                                allButselectedVideo={this.state.videosData.filter(
                                    (video) =>
                                        video.id !== this.state.selectedVideo.id
                                )}
                                videosData={this.state.videosData}
                                handleVideoSelect={this.handleVideoSelect}
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
