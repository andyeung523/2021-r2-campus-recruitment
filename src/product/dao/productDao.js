import config from '../../config/config.json';
import axios from 'axios';

export const getProduct = () => {
    return axios.get(config.SERVER_ENDPOINT + '/product')
                .then((res) => {
                    return res.data.data
                }).catch((err) => {
                    console.log("API ERROR");
                });
}