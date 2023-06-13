import { configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from './toollkitReducer'

export const store = configureStore({
  reducer: { movies: moviesSlice },
})
