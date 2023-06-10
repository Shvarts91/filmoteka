import { combineReducers, configureStore } from '@reduxjs/toolkit'
import movies from './toollkitReducer'


export const store = configureStore({
  reducer: {movies},
})
