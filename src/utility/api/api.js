import axios from "axios";

const URL_API = "https://www.breakingbadapi.com/api/";

export const getInfo = ({ getData, setItem, setLoading }) => {
  axios
    .get(URL_API + getData)
    .then(({ data }) => setItem(data[0]))
    .then(() => setLoading(false));
};
