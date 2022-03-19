import { configureStore } from '@reduxjs/toolkit'
import ItemReducer from "./reducers/TodoSlice"

export const store = configureStore({
    reducer: {
      Todo: ItemReducer,
  },
})

export default store