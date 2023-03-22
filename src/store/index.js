import { configureStore } from '@reduxjs/toolkit'
import listReducer from './listReducerSlice'

export default configureStore({
  reducer: {
    lists:listReducer,
  },
})