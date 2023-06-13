import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../api/Api'
import { useState } from 'react'
import style from './Pagination.module.css'

function Paginator() {
  const dispatch = useDispatch()

  const { totalResults, pageSize, currentPage } = useSelector(
    ({ movies }) => movies
  )

  const [page, setPage] = useState(currentPage)
  let pagesCount = Math.ceil(totalResults / pageSize)
  const handleChange = (event, value) => {
    setPage(value)
    dispatch(fetchMovies(value))
    window.scrollTo(0, 0)
  }

  return (
    <Stack spacing={2}>
      <Pagination
        className={style.pagination}
        page={page}
        onChange={handleChange}
        count={pagesCount}
        shape="rounded"
      />
    </Stack>
  )
}

export { Paginator }
