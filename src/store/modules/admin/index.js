import mutations from './mutations';
import actions from './actions';

const state = {
    users:[],
    isFetching:false,
    error:false
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}