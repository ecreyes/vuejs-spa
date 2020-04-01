import { SET_REQUEST, SET_LOGIN_SUCCESS, SET_FAILED,SET_LOGOUT} from '../../mutations-types';

export default {
  [SET_REQUEST](state, data) {
    state.isFetching = data.isFetching;
  },
  [SET_LOGIN_SUCCESS](state, data) {
    state.user = data.payload.userDB;
    state.token = data.payload.token;
    state.isFetching = data.isFetching;
    state.error = data.error;
    state.isLogged = true;
  },
  [SET_FAILED](state, data) {
    state.isFetching = data.isFetching;
    state.error = data.error;
  },
  [SET_LOGOUT](state){
    state.user = {},
    state.token = "",
    state.isLogged = false,
    state.isFetching = false,
    state.error = false
  }
}
