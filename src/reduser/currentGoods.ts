import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICard } from '../types/ICard'

interface IState {
    currentGoods: any
  }
  

  const initialState: IState = {
    currentGoods: {  }
  }
const goodsSlice = createSlice({
    name: 'goods',
    initialState, 
    reducers: {
        setCurrentGoods: (state, action: PayloadAction<ICard>) => {
            state.currentGoods = action.payload
        }
    }
})

export const {setCurrentGoods} = goodsSlice.actions
export default goodsSlice.reducer