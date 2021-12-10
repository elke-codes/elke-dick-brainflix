import { API_URL } from "../externalInfo";
import { API_KEY } from "../externalInfo";

export const getVideoIDData = () => {
    axios
        .get(`${API_URL}/videos/{"videoid"}{${API_KEY}`)
        .then((result) => {
            const detailsData = result.data;

            console.log(detailsData);
        })
        .catch((err) => console.log(err));
};
