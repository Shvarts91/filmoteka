import { createSlice } from '@reduxjs/toolkit'
import {
  fetchMovies,
  fetchGenres,
  fetchSearch,
  fetchFilmById,
} from '../api/Api'

const initialState = {
  error: null,
  loading: false,
  films: [],
  pageSize: 20,
  totalPages: 0,
  totalResults: 0,
  currentPage: 1,
  prodaction: '',
  searchQuery: '',
  genres: {},
  currentFilm: {},
}

const {
  reducer: moviesSlice,
  actions: { setSearchQuery },
} = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
  },
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
        state.error = action.payload.status_message
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

      .addCase(fetchSearch.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.loading = false
        state.films = action.payload.results
        state.totalResults = action.payload.total_results
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      .addCase(fetchFilmById.pending, (state) => {
        state.loading = true
        state.error = null
        state.currentFilm = {}
      })
      .addCase(fetchFilmById.fulfilled, (state, action) => {
        state.loading = false
        state.currentFilm = action.payload
      })
      .addCase(fetchFilmById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

// const {
//   reducer: searchSlice,
//    actions: { setSearchQuery },
// } = createSlice({
//   name: 'search',
//   initialState,
//   reducers: {
//     setSearchQuery: (state, action) => {
//       return action.payload
//     },
//   },
// })

export { moviesSlice, setSearchQuery }
