import { useDispatch } from 'react-redux'
import { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { setSearchQuery } from '../../../../store/filmsSlice'
import { fetchMovies, fetchSearch } from '../../../../api/api'
import style from './Search.module.css'

function Search() {
  const dispatch = useDispatch()

  const [movie, setMovie] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearchQuery(movie.trim()))

    if (movie.trim()) return dispatch(fetchSearch({ value: movie }))
    dispatch(fetchMovies())
  }

  const handleChange = (e) => {
    setMovie(e.target.value)
  }

  return (
    <form className={style.search} onSubmit={handleSearch}>
      <TextField
        label="Search movie"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#4caf50', mr: 1, my: 0.5 }} />
            </InputAdornment>
          ),
        }}
        variant="standard"
        onChange={handleChange}
        value={movie}
      />
    </form>
  )
}

export { Search }
