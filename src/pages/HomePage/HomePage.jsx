import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Comments from "../../components/Comments/Comments";
import VideosNext from "../../components/VideosNext/VideosNext";
import Video from "../../components/Video/Video";

import React, { Component } from "react";
import axios from "axios";
import jsonDataDetail from "../../data/video-details.json";
import jsonData from "../../data/videos.json";
import { API_KEY } from "../../utils/externalInfo";
import { API_URL } from "../../utils/externalInfo";
import { getInitialVideoData } from "../../utils/apiCalls/getInitialVideoData";

class HomePage extends Component {
    state = {
        videosData: [],
        // videosDetail: jsonDataDetail,
        selectedVideo: ""
    };
    handleVideoSelect = (id) => {
        console.log("id from handleVideoSelect", id);
        this.setState({
            selectedVideo: this.state.videosData.find(
                (video) => video.id === id
            )
        });
    };
    componentDidMount() {
        // console.log(getInitialVideoData);
        // getInitialVideoData().then((videosDataList) => {
        //     this.setState({
        //         videosData: videosDataList,
        //         selectedVideo: videosDataList[0]
        //     });
        // });
        axios
            .get(`${API_URL}videos?api_key=${API_KEY}`)
            .then((result) => {
                const videosData = result.data;
                console.log(videosData);

                this.setState({
                    videosData: videosData,
                    selectedVideo: videosData[0]
                });
                console.log(this.state.selectedVideo);
                return videosData;
            })
            // .then((videosData) => {
            //     // console.log(result);
            //     this.setState({
            //         selectedVideo: videosData[0]
            //     });
            //     console.log(this.state.selectedVideo);
            // })
            .catch((err) => console.log(err));
    }

    //   getVideoDetails(id) {
    //     axios.get(`${API_URL}videos/${video.id}?api_key=${API_KEY}`);
    // }

    // componentDidUpdate(prevProps) {
    //     const
    // }

    render() {
        return (
            <>
                <Header />
                <Video selectedVideo={this.state.selectedVideo} />
                {/* <Hero
                    videosDetail={this.state.videosDetail}
                    selectedVideo={this.state.selectedVideo}
                /> */}
                {/* <div className="main"> */}
                {/* <Comments
                        videosDetail={this.state.videosDetail}
                        selectedVideo={this.state.selectedVideo}
                    /> */}
                <VideosNext
                    // allButselectedVideo={this.state.allButselectedVideo}
                    videosData={this.state.videosData}
                    handleVideoSelect={this.handleVideoSelect}
                />

                {/* </div> */}
            </>
        );
    }
}

export default HomePage;

{
    //     /* handleVideoSelect = (id) => {
    // //     this.setState({
    // //         selectedVideo: jsonDataDetail.find((video) => video.id === id)
    // //     });
    //     // not in the requirements but so much nicer ux than having to scroll to the top yourself
    //     // https://www.codegrepper.com/code-examples/javascript/onclick+scroll+to+top+javascript
    //     window.scroll({
    //         top: 0,
    //         left: 0,
    //         behavior: "smooth"
    //     });
    // };
    // //trying to copy from demo axios with react
    // componentDidMount() {
    //     console.log("props from componentdidmount", this.props);
    //     axios.get(`${API_URL}videos?api_key=${API_KEY}`).then((result) => {
    //         const videosData = result.data;
    //         console.log("from getVideoData", typeof videosData);
    //         this.setState({
    //             videosData: videosData
    //         });
    //         // .then(fistVideo =>{
    //         // });
    //     });
    // }
    // getVideoDetails = (id) => {
    //     axios
    //         .get(`${API_URL}videos/${id}?api_key=${API_KEY}`)
    //         .then((result) => {
    //             console.log(result);
    //         })
    //         .catch((err) => console.log(err));
    // };
    //     render() {
    //         console.log("videosdata from render homepage", this.state.videosData);
    //         return (
    //             <>
    //                 <Header />
    //                 {/* <Video selectedVideo={this.state.selectedVideo} />
    //                 <Hero
    //                     videosDetail={this.state.videosDetail}
    //                     selectedVideo={this.state.selectedVideo}
    //                 />
    //                 <div className="main">
    //                     <Comments
    //                         videosDetail={this.state.videosDetail}
    //                         selectedVideo={this.state.selectedVideo}
    //                     /> */
}
//                 {/* <VideosNext
//                         allButselectedVideo={this.state.allButselectedVideo}
//                         handleVideoSelect={this.state.handleVideoSelect}
//                     /> */}
//                 {/* </div> */}
//             </>
//         );
//     }
// } */}
