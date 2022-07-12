
let redux = require('redux')

const InitialState = {
   userObj: {},
    isLogin: false
}
const allReducer = (state = InitialState, action) => {
    switch (action.type){
        case "GET_DATA_USER":
            return {...state, userObj: action.userInfo}
        case "CHANGE_STATUS_LOGIN":
            return {...state, isLogin: !state.isLogin}
        default:
            return state
    }
}
let store = redux.createStore(allReducer);
store.subscribe(function (){
    console.log(JSON.stringify(store.getState()))
})
export default store
