import { getAllUsers } from "../../../api/admin/userService";
import { ADMIN_USERS_REQUEST } from "../../actions-types";
import { SET_USERS_SUCCESS,SET_REQUEST,SET_FAILED } from "../../mutations-types";

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
    }
  }