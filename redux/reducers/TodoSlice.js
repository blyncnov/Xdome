import { createSlice } from '@reduxjs/toolkit'
import {CardList} from "../../data/CardItemList"

const initialState = {
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
        state.lists = state.lists.filter(item => item.id !== action.payload.id);
    },  
        UpdateTodo: (state, action) => {
      // state.lists += 1
    },  
  },
})

// Action creators are generated for each case reducer function
export const { AddTodo, DeleteTodo, UpdateTodo , TotalTodo} = ItemSliceCase.actions

export default ItemSliceCase.reducer