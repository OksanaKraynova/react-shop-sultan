import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import  createReducer  from "./createCard";
import goodsReducer from "./currentGoods";

const rootReducer = combineReducers({
    goodState: goodsReducer,
    cartState: cartReducer,
    createState: createReducer
})

export default rootReducer