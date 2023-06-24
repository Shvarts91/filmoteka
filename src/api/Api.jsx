import { createAsyncThunk } from '@reduxjs/toolkit'

const API = 'https://api.themoviedb.org'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',

  async (page = 1) => {
    const response = await fetch(
      `${API}/3/trending/movie/week?api_key=249f222afb1002186f4d88b2b5418b55&page=${page}`
    )

    const results = await response.json()

    return results
  }
)

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
  const response = await fetch(
    `${API}/3/genre/movie/list?language=en&api_key=249f222afb1002186f4d88b2b5418b55`
  )
  const results = await response.json()

  const genresMap = {}

  for (const genre of results.genres) {
    genresMap[genre.id] = genre.name
  }

  return genresMap
})

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',

  async ({ value = '', pageNumber = 1 }) => {
    const response = await fetch(
      `${API}/3/search/movie?api_key=249f222afb1002186f4d88b2b5418b55&query=${value}&page=${pageNumber}`
    )

    const results = await response.json()

    return results
  }
)

export const fetchFilmById = createAsyncThunk(
  'filmById/fetchFilmById',

  async (id) => {
    const response = await fetch(
      `${API}/3/movie/${id}?api_key=249f222afb1002186f4d88b2b5418b55`
    )

    const results = await response.json()

    return results
  }
)
