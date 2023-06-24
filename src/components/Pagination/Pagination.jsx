import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, fetchSearch } from '../../api/Api'
import { useState } from 'react'
import style from './Pagination.module.css'

function Paginator() {
  const dispatch = useDispatch()

  const { totalResults, pageSize, currentPage, searchQuery } = useSelector(
    ({ movies }) => movies
  )
  console.log(searchQuery, totalResults)
  const [pageNumber, setPageNumber] = useState(currentPage)
  let pagesCount = Math.ceil(totalResults / pageSize)
  const handleChange = (event, value) => {
    setPageNumber(value)
    if (searchQuery) {
      return dispatch(fetchSearch({ value: searchQuery, pageNumber: value }))
    }
    dispatch(fetchMovies(value))

    window.scrollTo(0, 0)
  }
  return (
    <Stack spacing={2}>
      <Pagination
        className={style.pagination}
        page={pageNumber}
        count={pagesCount}
        onChange={handleChange}
        shape="rounded"
      />
    </Stack>
  )
}

export { Paginator }
