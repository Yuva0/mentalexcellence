import axios from "axios";

const callAxios = (url) => {
    const fetch = async() => {
        const res = await axios.get("http://localhost:5000/api/"+url);
        return res;
    };
    const res = fetch();
    return res;
};

export default callAxios;