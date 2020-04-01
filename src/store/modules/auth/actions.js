import { login,signup } from '../../../api/authService';
import { LOGIN_REQUEST, REGISTER_REQUEST } from "../../actions-types";
import {
  SET_REQUEST, SET_LOGIN_SUCCESS, SET_FAILED
} from '../../mutations-types';

export default {
  [LOGIN_REQUEST](context, user) {
    return new Promise((resolve, reject) => {
      context.commit(SET_REQUEST, { isFetching: true });
      return login(user).then(res => {
        context.commit(SET_LOGIN_SUCCESS, { payload: res.data, isFetching: false, error: false });
        resolve();
      }).catch(() => {
        context.commit(SET_FAILED, { isFetching: false, error: true });
        reject();
      });
    })
  },
  [REGISTER_REQUEST](context, user) {
    return new Promise((resolve, reject) => {
      context.commit(SET_REQUEST, { isFetching: true });
      return signup(user).then(res=>{
        context.commit(SET_LOGIN_SUCCESS, { payload: res.data, isFetching: false, error: false });
        resolve();
      }).catch(()=>{
        reject();
      });
    });
  }
}