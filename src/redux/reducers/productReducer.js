import { getValue } from "@testing-library/user-event/dist/utils"
import { ActionTypes } from "../contains/action-types";

const initialState={
    products:[{
        id:1,
        title:'Dipesh',
        category:"programmer"
    }]
}
export const productReducer =(state=initialState,action)=>{
switch(action.type){
    case ActionTypes.SET_PRODUCTS:
        return state;
        default:
            return state;
}
}