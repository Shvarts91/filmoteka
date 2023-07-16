import { configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from './filmsSlice'

export const store = configureStore({
  reducer: { movies: moviesSlice },
})
