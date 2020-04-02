import { NODE_SERVER_URL } from './../config';
import store from "../../store";
import axios from 'axios';

export const getAllUsers = (token) => {
    let url = `${NODE_SERVER_URL}/users_all`;
    return axios.get(url,{headers:{token}});
}