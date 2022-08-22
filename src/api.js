import axios from 'axios';
const BaseURL = process.env.REACT_APP_BASE_URL;
let urls = {
    GET_EXPRESSION: BaseURL + 'g-exp',
    UPDATE_EXPRESSION: BaseURL + 'u-exp',
    SHORT_URL: BaseURL + 's-url',
    LONG_URL: BaseURL + 'l-url',
    GET_CONTINENT: BaseURL + 'continent',
    GET_COUNTRIES: BaseURL + 'country',
    SAVE_INFO: BaseURL + 's-info'
};

let api = {
    getExpression: () => axios.get(urls.GET_EXPRESSION),
    updateExpression: (id) => axios.get(urls.UPDATE_EXPRESSION + '/' + id),
    createShortUrl: (url) => axios.get(urls.SHORT_URL, { params: { url: url } }),
    getLongUrl: (code) => axios.get(urls.LONG_URL + '/' + code),
    getContinents: (continent) => axios.get(urls.GET_CONTINENT, { params: { c: continent } }),
    saveInfo: () => axios.get(urls.SAVE_INFO),
};

export default api;