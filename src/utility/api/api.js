import axios from "axios";

const URL_API = "https://www.breakingbadapi.com/api/";

export const getInfo = ({ getData, setItem, setLoading }) => {
  axios
    .get(URL_API + getData)
    .then(({ data }) => setItem(data[0]))
    .then(() => setLoading(false));
};

export const getQuote = ({ getData, setItem, setLoading }) => {
  axios
    .get(URL_API + getData)
    .then(({ data }) => setItem(data))
    .then(() => setLoading(false));
};

export const getRandChar = ({ getData, setChar, setLoading }) => {
  axios
    .get(URL_API + getData)
    .then(({ data }) => setChar(data[0]))
    .then(() => setLoading(true));
};
