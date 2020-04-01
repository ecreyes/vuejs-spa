import mutations from './mutations';
import getters from './getters';
import actions from './actions';

const state = {
    user:{},
    token:"",
    isLogged:false,
    isFetching:false,
    error:false
}

export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}