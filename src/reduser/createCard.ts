import { createSlice } from "@reduxjs/toolkit"

interface Goods {
        goods: any
}

const data = localStorage.getItem('sultan-goods')

const initialState: Goods  = {
    goods: data ? JSON.parse(data) : []
}

const createReducer = createSlice({
name: 'catalog',
initialState,
reducers: {
    addCard(state, action){
        state.goods = [...state.goods, action.payload]
        localStorage.setItem('sultan-goods', JSON.stringify(state.goods))
    },
    removeCard(state, action){
        state.goods =  action.payload
        localStorage.setItem('sultan-goods', JSON.stringify(state.goods))
    },
    editCard(state, action){
        localStorage.setItem('sultan-goods', JSON.stringify(state.goods))
    }
}
})

export const { addCard, removeCard, editCard} = createReducer.actions

export default createReducer.reducer