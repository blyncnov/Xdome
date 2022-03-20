import { createSlice } from '@reduxjs/toolkit'
import {CardList} from "../../data/CardItemList"

const initialState = {
  lists: CardList,
  show: true,
  click: true
}

export const ItemSliceCase = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      ShowAddForm: (state, action) => {
      state.show = !state.show
    }, 
         UpdateEdit: (state, action) => {
      state.click = !state.click;
          

    }, 
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
      state.items.map((item) => {
        if (item.id !== action.payload.id) {
          item.Subject = action.payload.Subject
             item.Description = action.payload.Description
       }
     })
    }
  },
})

// Action creators are generated for each case reducer function
export const { AddTodo, DeleteTodo, UpdateTodo , TotalTodo, ShowAddForm, UpdateEdit} = ItemSliceCase.actions

export default ItemSliceCase.reducer