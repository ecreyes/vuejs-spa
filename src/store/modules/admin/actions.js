import { getAllUsers, deleteUser, enableUser } from "../../../api/admin/userService";
import { ADMIN_USERS_REQUEST, ADMIN_DELETE_USER_REQUEST, ADMIN_ENABLE_USER_REQUEST } from "../../actions-types";
import { SET_USERS_SUCCESS, SET_REQUEST, SET_FAILED, SET_STATE_USER } from "../../mutations-types";

export default {
  [ADMIN_USERS_REQUEST](context, token) {
    return new Promise((resolve, reject) => {
      context.commit(SET_REQUEST, { isFetching: true });
      return getAllUsers(token).then(res => {
        context.commit(SET_USERS_SUCCESS, { payload: res.data, isFetching: false, error: false });
        resolve();
      }).catch(() => {
        context.commit(SET_FAILED, { isFetching: false, error: true });
        reject();
      });
    })
  },
  [ADMIN_DELETE_USER_REQUEST](context, params) {
    return new Promise((resolve, reject) => {
      context.commit(SET_REQUEST, { isFetching: true });
      return deleteUser(params.id, params.token).then((res) => {
        context.commit(SET_STATE_USER, { payload: res.data.userDB, isFetching: false, error: false });
        resolve();
      }).catch(() => {
        context.commit(SET_FAILED, { isFetching: false, error: true });
        reject();
      });
    });
  },
  [ADMIN_ENABLE_USER_REQUEST](context,params){
    return new Promise((resolve, reject) => {
      context.commit(SET_REQUEST, { isFetching: true });
      return enableUser(params.id, params.token).then((res) => {
        context.commit(SET_STATE_USER, { payload: res.data.userDB, isFetching: false, error: false });
        resolve();
      }).catch(() => {
        context.commit(SET_FAILED, { isFetching: false, error: true });
        reject();
      });
    });

  }
}