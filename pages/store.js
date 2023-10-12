import { createStore } from "redux";
const initialState={
    balance:0,
    fullname:"",
    mobile:null,
}

function accountReducer(state=initialState,action){
    switch(action.type){
        case "deposit":
            return {...state,balance:state.balance+action.payload}
        case "withdraw":
            return {...state,balance:state.balance-action.payload}
        case "mobileupdate":
            return {...state,mobile:action.payload}
        case "nameupdate":
            return {...state,fullname:action.payload}
        default:
            return state;
    }
}

const store=createStore(accountReducer);

export default store;
