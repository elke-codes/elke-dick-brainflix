import axios from "axios";
import { API_URL } from "../externalInfo";
import { API_KEY } from "../externalInfo";

export function getInitialVideoData() {
    axios
        .get(`${API_URL}videos?api_key=${API_KEY}`)
        .then((result) => {
            // console.log(result);
            const videosData = result.data;
            return videosData;
        })
        .catch((err) => console.log(err));
}
