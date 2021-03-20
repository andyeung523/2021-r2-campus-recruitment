import config from '../../config/config.json';
import axios from 'axios';

export const getCart = () => {
    return axios.get(config.SERVER_ENDPOINT + '/cart')
                .then((res) => {
                    return res.data.data
                }).catch((err) => {
                    console.log("API ERROR");
                });
}

export const addCart = (id) => {
    return axios.post(config.SERVER_ENDPOINT + `/cart?productId=${id}`)
                .then((res) => {
                    return res.data.data
                }).catch((err) => {
                    console.log("API ERROR");
                });
}

export const deleteCart = () =>{
    return axios.delete(config.SERVER_ENDPOINT + `/cart`)
                .then((res) => {
                    return res.data.data
                }).catch((err) => {
                    console.log("API ERROR");
                });
}