import { createSlice } from '@reduxjs/toolkit'
import { fetchMovies, fetchGenres } from '../components/api/Api'

const initialState = {
  error: null,
  loading: false,
  films: [],
  pageSize: 12,
  totalPages: 0,
  totalResults: 0,
  currentPage: 1,
  prodaction: '',
  genres: {},
  currentFilm: {
    title: '',
    createYear: '',
    duration: '',
    actors: '',
  },
}

const { reducer: moviesSlice } = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.films = action.payload.results
        state.loading = false
        state.totalPages = action.payload.total_pages
        state.totalResults = action.payload.total_results
        state.currentPage = action.payload.page
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      .addCase(fetchGenres.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.loading = false
        state.genres = action.payload
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export { moviesSlice }
