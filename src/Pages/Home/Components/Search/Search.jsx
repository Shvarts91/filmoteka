import { useDispatch } from 'react-redux'
import { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { setSearchQuery } from '../../../../store/filmsSlice'
import { fetchMovies, fetchSearch } from '../../../../api/api'
import style from './Search.module.css'
import { styled } from '@mui/material/styles'

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
      <StyledTextField
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

const StyledTextField = styled(TextField)`
  .MuiInputLabel-root {
    color: #4caf50;
  }

  .MuiInputBase-input {
    color: #fff;
  }

  .MuiInputBase-root::before {
    border-bottom-color: #4caf50;
  }

  .MuiInputBase-root::after {
    border-bottom-color: #2fd835;
  }

  .MuiInputBase-root:hover::before {
    border-bottom-color: #2fd835;
  }
`

export { Search }
