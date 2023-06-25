import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { fetchMovies, fetchSearch } from '../../api/Api'
import style from './Search.module.css'
import { setSearchQuery } from '../../toolkitRedux/toollkitReducer'

function Search() {
  const dispatch = useDispatch()

  const [movie, setMovie] = useState('')

  const state = useSelector((movies) => movies)

  console.log(state)

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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Search movie"
          onChange={handleChange}
          value={movie}
          variant="standard"
        />
      </Box>
    </form>
  )
}

export { Search }
