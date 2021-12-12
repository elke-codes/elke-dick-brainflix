import { API_URL } from "../externalInfo";
import { API_KEY } from "../externalInfo";

export const getVideoIDData = () => {
    axios
        .get(`${API_URL}/videos/{"videoid"}{${API_KEY}`)
        .then((result) => {
            const detailsData = result.data;
        })
        .catch((err) => console.log(err));
};
