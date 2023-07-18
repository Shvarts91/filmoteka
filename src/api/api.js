import { createAsyncThunk } from '@reduxjs/toolkit'

const API = 'https://api.themoviedb.org'
const API_KEY = '249f222afb1002186f4d88b2b5418b55'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',

  async (page = 1) => {
    const response = await fetch(
      `${API}/3/trending/movie/week?api_key=${API_KEY}&page=${page}`
    )

    return await response.json()
  }
)

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async () => {
  const response = await fetch(
    `${API}/3/genre/movie/list?language=en&api_key=${API_KEY}`
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
      `${API}/3/search/movie?api_key=${API_KEY}&query=${value}&page=${pageNumber}`
    )

    return await response.json()
  }
)

export const fetchFilmById = createAsyncThunk(
  'filmById/fetchFilmById',

  async (id) => {
    const response = await fetch(`${API}/3/movie/${id}?api_key=${API_KEY}`)

    const result = await response.json()

    return {
      ...result,
      production_companies: result.production_companies.filter(
        ({ logo_path }) => logo_path
      ),
    }
  }
)

export const fetchFilmListById = createAsyncThunk(
  'filmListById/fetchFilmListById',

  async (idList) => {
    const result = []
    const promises = idList.map((id) =>
      fetch(`${API}/3/movie/${id}?api_key=${API_KEY}`)
    )

    const responseFilms = await Promise.allSettled(promises)

    for (const { value, status } of responseFilms) {
      if (status === 'rejected') continue
      const data = await value.json()
      result.push({ ...data, genre_ids: data.genres.map(({ id }) => id) })
    }

    return result
  }
)
