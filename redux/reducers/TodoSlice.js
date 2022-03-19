import { createSlice } from '@reduxjs/toolkit'
import {CardList} from "../../data/CardItemList"

const initialState = {
    value: 1,
    lists: CardList
}

export const ItemSliceCase = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.lists.push(action.payload);
    },  
    
    TotalTodo: (state, action) => {
      // state.value 
    },
      DeleteTodo: (state, action) => {
      // state.lists += 1
    },  
        UpdateTodo: (state, action) => {
      // state.lists += 1
    },  
  },
})

// Action creators are generated for each case reducer function
export const { AddTodo, DeleteTodo, UpdateTodo , TotalTodo} = ItemSliceCase.actions

export default ItemSliceCase.reducer