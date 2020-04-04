import {
  SET_USERS_SUCCESS, SET_REQUEST, SET_FAILED,
  SET_STATE_USER, SET_ADD_USER,SET_USER_UPDATE
} from "../../mutations-types";

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
  },
  [SET_STATE_USER](state, data) {
    state.users = state.users.map(user => {
      if (user._id == data.payload._id) {
        return data.payload
      } else {
        return user;
      }
    })
    state.isFetching = data.isFetching;
    state.error = data.error;
  },
  [SET_ADD_USER](state, data) {
    state.users = [...state.users, data.payload];
    state.isFetching = data.isFetching;
    state.error = data.error;
  },
  [SET_USER_UPDATE](state,data){
    state.users = state.users.map(user => {
      if (user._id == data.payload._id) {
        return data.payload
      } else {
        return user;
      }
    })
    state.isFetching = data.isFetching;
    state.error = data.error;
  }
}  