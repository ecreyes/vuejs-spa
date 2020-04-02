import { SET_USERS_SUCCESS, SET_REQUEST, SET_FAILED } from "../../mutations-types";

export default {
  [SET_REQUEST](state, data) {
    state.isFetching = data.isFetching;
  },
  [SET_USERS_SUCCESS](state, data) {
    state.users = data.payload.users;
    state.isFetching = data.isFetching;
    state.error = data.error;
  },
  [SET_FAILED](state, data) {
    state.isFetching = data.isFetching;
    state.error = data.error;
  }
}  