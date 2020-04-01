import { NODE_SERVER_URL } from './config';
import axios from 'axios';


/*
    login({email:"user1@test.cl",password:"12345"}).then(res=>{
        console.log(res);
    }).catch(error=>console.log(error));
*/
export const login = (user) => {
  let url = `${NODE_SERVER_URL}/signin`;
  return axios.post(url, user);
}



/*
    signup({username:"user1",email:"user1@test.cl",password:"12345"}).then(res=>{
        console.log(res);
    }).catch(error=>console.log(error));
*/
export const signup = (user) => {
  let url = `${NODE_SERVER_URL}/signup`;
  return axios.post(url, user);
}