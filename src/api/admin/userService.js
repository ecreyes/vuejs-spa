import { NODE_SERVER_URL } from './../config';
import axios from 'axios';

export const getAllUsers = (token) => {
    let url = `${NODE_SERVER_URL}/users_all`;
    return axios.get(url,{headers:{token}});
}

export const deleteUser = (id,token) => {
    let url = `${NODE_SERVER_URL}/disable_user`;
    return axios.put(url,{id},{headers:{token}});
}

export const enableUser = (id,token)=>{
    let url = `${NODE_SERVER_URL}/enable_user`;
    return axios.put(url,{id},{headers:{token}});
}